import { getRoot, types } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(login),
    register: asyncModel(register),
  })
  .actions((self) => ({
    logout() {
      Api.Auth.logout();
      getRoot(self).viewer.removeViewer();
    },
  }));

function login({ email, password }) {
  return async function loginFlow(flowStore) {
    const res = await Api.Auth.login({ email, password });
    Api.Auth.setToken(res.data.token);

    getRoot(flowStore).viewer.setViewer(res.data.user);
  };
}

function register({ fullName, email, password }) {
  return async function registerFlow(flowStore) {
    const {
      data: { token, user },
    } = await Api.Auth.register({
      fullName,
      email,
      password,
    });

    Api.Auth.setToken(token);

    getRoot(flowStore).viewer.setViewer(user);
  };
}
