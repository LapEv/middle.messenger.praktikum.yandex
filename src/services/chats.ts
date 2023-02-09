import { ChatsAPI } from "api";
import { SocketsCreator } from "services/sockets";
import {
  APIResponseHasError,
  transformAvatarURL,
  transformChatsGetResponseToChatsData,
} from "utils/api";
import { transformChatUsersGetResponseToChatsUsersData } from "utils/api/from-api-data-transformers";
import { transformChatIDToDeleteAPI } from "utils/api/to-api-data-transformers";
import { objectWithoutKey } from "utils/objects-handle";

export class ChatsServiceClass {
  async getChats(afterRequestCallback?: TAfterRequestCallback) {
    let response;

    try {
      const request = await ChatsAPI.getChats();
      response = request.response;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }

      if (!APIResponseHasError(response)) {
        window.store.dispatch({
          chats: transformChatsGetResponseToChatsData(response),
        });
      }
    } catch (error) {
      console.error(`GET CHATS REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }

  async createChat(
    data: TCreateChatDTO,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let response;

    try {
      const request = await ChatsAPI.createChat(data);
      response = request.response;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }

      if (!APIResponseHasError(response)) {
        const chatID = (response as TChatCreateAPIResponse).id.toString();
        const socket = await SocketsCreator.createChatSocket({ chatID });
        window.store.setSocketByChatID(chatID, socket);

        await this.getChats();
      }
    } catch (error) {
      console.error(`CREATE CHAT REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }

  async deleteChat(
    chatID: string,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let response;

    try {
      const request = await ChatsAPI.deleteChat(
        transformChatIDToDeleteAPI(chatID)
      );
      response = request.response;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }

      if (!APIResponseHasError(response)) {
        const currentChats = window.store.getChatsDataByPath();
        const newChats = objectWithoutKey(
          currentChats,
          chatID
        ) as TAppChatsData;
        window.store.dispatch({ chats: newChats });
        window.store.dispatch({ currentChatID: null });
      }
    } catch (error) {
      console.error(`DELETE CHAT(${chatID}) REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }

  async getChatUsers(
    chatID: string,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let response;

    try {
      const request = await ChatsAPI.getChatUsers(chatID);
      response = request.response;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }
    } catch (error) {
      console.error(`GET CHAT(${chatID}) REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }

  async addUsersToChat(
    data: TAddChatUsersDTO,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let response;
    const chatID = data.chatId;

    try {
      const request = await ChatsAPI.addUsersToChat(data);
      response = request.response;

      const usersList = data.users;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }

      if (!APIResponseHasError(response)) {
        const responseChatUsers = (await this.getChatUsers(
          chatID.toString()
        )) as TChatGetUsersAPIResponse;

        const usersData =
          transformChatUsersGetResponseToChatsUsersData(responseChatUsers);

        usersList.forEach((userID) => {
          window.store.setStateByPath(
            `chatsUsers.${userID}`,
            usersData[userID]
          );
        });
      }
    } catch (error) {
      console.error(`ADD USERS TO CHAT(${chatID}) REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }

  async changeAvatar(
    avatarPutForm: FormData,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let response;
    let chatID;

    try {
      const request = await ChatsAPI.changeAvatar(avatarPutForm);
      response = request.response;
      chatID = avatarPutForm.get("chatId");

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }

      if (!APIResponseHasError(response)) {
        const avatar = transformAvatarURL(response.avatar);
        window.store.setStateByPath(`chats.${chatID}.avatar`, avatar);
      }
    } catch (error) {
      console.error(`CHANGE CHAT(${chatID}) AVATAR REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }
}

export const ChatsService = new ChatsServiceClass();
