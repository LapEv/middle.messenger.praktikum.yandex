import { AuthorizationAPI } from "api";
import { AppRoutes } from "core/router";
import { initAppData } from "services/initApp/initAppData";
import { APIResponseHasError } from "utils/api";

export const enum EnumLoginAPIErrors {
  AlreadyInSystem = "User already in system",
}

class AuthorizationServiceClass {
  async getUser() {
    try {
      const request = await AuthorizationAPI.me();
      const { response } = request;
      return response;
    } catch (error) {
      console.error(`GET USER REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }
  }

  async login(
    data: TLoginFormDTO,
    afterRequestCallback: TAfterRequestCallback = () => {}
  ) {
    try {
      const requestLogin = await AuthorizationAPI.login(data);
      const { response } = requestLogin;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }

      if (
        !APIResponseHasError(response) ||
        response.reason === EnumLoginAPIErrors.AlreadyInSystem
      ) {
        const userResponse = await this.getUser();
        if (!APIResponseHasError(userResponse)) {
          await initAppData(userResponse.id);
        } else {
          throw new Error(
            `Unexpecter User Response After Login: ${userResponse.reason}`
          );
        }
        window.router.go(AppRoutes.Chat);
      }
      return response;
    } catch (error) {
      console.error(`LOGIN REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }
  }

  async logout() {
    try {
      const request = await AuthorizationAPI.logout();
      const { response } = request;

      window.store.dispatch({ user: null });
      window.store.dispatch({ currentChatID: null });
      window.router.go(AppRoutes.Login);
      return response;
    } catch (error) {
      console.error(`LOGOUT REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }
  }
}

export const AuthorizationService = new AuthorizationServiceClass();
