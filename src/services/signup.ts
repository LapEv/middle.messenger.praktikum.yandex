import { SignUpAPI } from "api";

export class SignUpServiceClass {
  async signup(
    data: TSignUpFormDTO,
    afterRequestCallback?: TAfterRequestCallback
  ) {
    let response;

    try {
      const request = await SignUpAPI.signup(data);
      response = request.response;

      if (afterRequestCallback) {
        await afterRequestCallback(response);
      }
    } catch (error) {
      console.error(`SIGN UP REQUEST ERROR: ${error}`); // eslint-disable-line no-console
      throw error;
    }

    return response;
  }
}

export const SignUpService = new SignUpServiceClass();
