import { SignUpService, ProfileService } from 'services';
import {
  transformSignUpFormDatatoAPI,
  transformProfileAPIResponseToUserData,
  APIResponseHasError,
} from 'utils/api';

async function afterRequestCallback(response: any) {
  // console.log(`Registration REQUEST RESPONSE: ${JSON.stringify(response)}`);
  if (APIResponseHasError(response)) {
    this.state.apiResponseError = response.reason;
    return;
  }

  this.state.apiResponseSuccess = 'Registration Successfull';
  const user = transformProfileAPIResponseToUserData(
    await ProfileService.getUserProfile(response.id)
  );
  window.store.dispatch({ user });
}

export async function afterValidationCallback() {
  const formData = this.collectFormData();
  const apiData = transformSignUpFormDatatoAPI(formData);
  // console.log(`API data: ${JSON.stringify(apiData)}`);

  SignUpService.signup(apiData, afterRequestCallback.bind(this));
}
