import { transformWebsocketMessageDTOtoAppMessage } from "utils/api";

type TChatWebSocketContructorArgs = {
  userID: string;
  chatID: string;
  chatToken: string;
};

export class ChatWebSocket {
  protected userID: string;

  public chatID: string;

  protected chatToken: string;

  protected socket: WebSocket;

  protected messagesArrayHandler: Nullable<
    (messagesBatch: TWebsocketMessageDTO[]) => void
  > = null;

  constructor(argsObject: TChatWebSocketContructorArgs) {
    Object.assign(this, argsObject);
    this._createSocket();
  }

  private _createSocket() {
    const { userID, chatID, chatToken } = this;

    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${chatToken}`
    );

    this.socket = socket;
    const ping = setInterval(function () {
      socket.send(
        JSON.stringify({
          type: "ping",
        })
      );
    }, 30000);

    socket.addEventListener("close", (event) => {
      if (!event.wasClean) {
        console.log(`Chat(${chatID}) Socket Closed Clearly`); // eslint-disable-line no-console
      } else {
        clearInterval(ping);
      }
    });

    socket.addEventListener(
      "message",
      function (event: any) {
        let message;

        try {
          message = JSON.parse(event.data);
        } catch (err) {
          return;
        }

        if (message.type === "pong" || message.type === "user connected") {
          return;
        }
        if (Array.isArray(message) && this.messagesArrayHandler) {
          this.messagesArrayHandler(message);
          return;
        }
        message = transformWebsocketMessageDTOtoAppMessage(message);
        const messagesStatePath = `chatsMessages.${chatID}`;

        const currentMessages = window.store.chatHasMessages(chatID)
          ? window.store.getStateValueByPath(messagesStatePath)
          : [];

        window.store.setStateByPath(
          messagesStatePath,
          [message, ...currentMessages],
          true
        );
      }.bind(this)
    );

    socket.addEventListener("error", () => {
      clearInterval(ping);
    });
  }

  public send(content: string, type = "message") {
    this.socket.send(JSON.stringify({ content, type }));
  }

  public getMessagesByOffset(offset: number) {
    return this.socket.send(
      JSON.stringify({
        content: offset.toString(),
        type: "get old",
      })
    );
  }

  public async waitSocketConnection() {
    await new Promise<void>((resolve) => {
      const awaiter = setInterval(() => {
        if (this.socket.readyState === 1) {
          resolve();
          clearInterval(awaiter);
          console.log(`SOCKET OF CHAT(${this.chatID}) CONNECTED`); // eslint-disable-line no-console
        }
      }, 50);
    });
  }
}
