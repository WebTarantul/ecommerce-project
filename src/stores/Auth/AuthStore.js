import { getRoot, types } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(loginFlow),
    register: asyncModel(registerFlow),
  })
  .actions((self) => ({
    logout() {
      Api.Auth.logout();
      getRoot(self).viewer.removeViewer();
    },
  }));

function loginFlow({ email, password }) {
  return async function login(store) {
    const res = await Api.Auth.login({ email, password });
    Api.Auth.setToken(res.data.token);

    getRoot(store).viewer.setViewer(res.data.user);
  };
}

function registerFlow({ fullName, email, password }) {
  return async function register(store) {
    const {
      data: { token, user },
    } = await Api.Auth.register({
      fullName,
      email,
      password,
    });

    Api.Auth.setToken(token);

    getRoot(store).viewer.setViewer(user);
  };
}
