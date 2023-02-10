import { ProfileAPI } from "api";
import {
  APIResponseHasError,
  transformProfileAPIResponseToUserData,
} from "utils/api";

class ProfileServiceClass {
  async getUserProfile(userID: number) {
    let response;

    try {
      const request = await ProfileAPI.getProfileData(userID);
      response = request.response;

      if (!APIResponseHasError(response)) {
        const user = transformProfileAPIResponseToUserData(response);
        window.store.dispatch({ user });
      }
    } catch (error) {
      console.error(`PROFILE WITH ID(${userID}) GET REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }

  async changeUserProfile(
    data: TProfileChangeDTO,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let response;

    try {
      const request = await ProfileAPI.changeProfile(data);
      response = request.response;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }
    } catch (error) {
      console.error(`PROFILE CHANGE REQUEST GET REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }

  async changeUserAvatar(
    avatarFormData: FormData,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let status;
    let response;

    try {
      const request = await ProfileAPI.changeAvatar(avatarFormData);
      status = request.status;
      response = request.response;

      /* eslint-disable no-console */
      console.log(
        `CHANGE AVATAR REQUEST: status ${status}; response: ${JSON.stringify(
          response
        )}`
      );
      /* eslint-enable no-console */

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }
    } catch (error) {
      /* eslint-disable no-console */
      console.error(
        `PROFILE CHANGE AVATAR REQUEST GET REQUEST ERROR: ${error}`
      );
      /* eslint-enable no-console */
      throw error;
    }

    return response;
  }
}

export const ProfileService = new ProfileServiceClass();
