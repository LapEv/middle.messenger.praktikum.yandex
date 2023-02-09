import { transformWebsocketMessageDTOtoAppMessage } from "utils/api";

import { ChatWebSocket } from "./socket-class";

const allMessagesReceiver = function (messagesBatch: TWebsocketMessageDTO[]) {
  this._setMessagesBatch(messagesBatch);
};

export class ChatMessagesHandler extends ChatWebSocket {
  static readonly messagesGetLimit = 20;

  private currentBatch = -1;

  private allMessagesReceivedStatus = false;

  private allMessages = [] as TAppChatMessage[];

  // @ts-ignore '_setMessagesBatch' is declared but its value is never read.
  private _setMessagesBatch(messagesBatch: TWebsocketMessageDTO[]) {
    if (messagesBatch.length === 0) {
      this.allMessagesReceivedStatus = true;
      return;
    }

    this.currentBatch += 1;
    const receivedMessages = messagesBatch.map((msg) =>
      transformWebsocketMessageDTOtoAppMessage(msg)
    );
    this.allMessages = [...this.allMessages, ...receivedMessages];
  }

  private async _getAllMessagesFromBatch(currentBatch: number) {
    const offset = currentBatch * ChatMessagesHandler.messagesGetLimit;
    this.getMessagesByOffset(offset);

    let messagesBatchAwaiter: NodeJS.Timer;
    await new Promise<void>((resolve, reject) => {
      messagesBatchAwaiter = setInterval(() => {
        if (this.socket.readyState > 1) {
          reject(
            new Error("Socket Closed While Awaiting Old Messages Get Responses")
          );
          return;
        }

        if (
          this.allMessagesReceivedStatus ||
          this.currentBatch === currentBatch
        ) {
          resolve();
        }
      }, 50);
    })
      .catch(() => {
        this._resetAllMessageReceivingStatus();
      })
      .finally(() => {
        clearInterval(messagesBatchAwaiter);
      });

    if (!this.allMessagesReceivedStatus) {
      await this._getAllMessagesFromBatch(currentBatch + 1);
    }
  }

  public async getAllMessages() {
    this.messagesArrayHandler = allMessagesReceiver.bind(this);

    await this._getAllMessagesFromBatch(0);

    const { allMessages } = this;
    this._resetAllMessageReceivingStatus();
    return allMessages;
  }

  private _resetAllMessageReceivingStatus() {
    this.messagesArrayHandler = null;
    this.allMessages = [];
    this.allMessagesReceivedStatus = false;
    this.currentBatch = -1;
  }
}
