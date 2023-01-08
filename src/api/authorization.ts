import request from './HTTPTransport';

class AuthorizationAPIClass {
  login(data: TLoginFormDTO) {
    return request.post('auth/signin', { data });
  }

  me() {
    return request.get('auth/user');
  }

  logout() {
    return request.post('auth/logout');
  }
}

export const AuthorizationAPI = new AuthorizationAPIClass();
