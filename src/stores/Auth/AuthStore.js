import { getRoot, types } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(login),
    register: asyncModel(register),
    isLoggedIn: false,
  })
  .actions((self) => ({
    setIsLoggedIn(isLogged) {
      self.isLoggedIn = isLogged;
    },
    logout() {
      Api.Auth.logout();
      self.setIsLoggedIn(false);
      getRoot(self).viewer.removeViewer();
    },
  }));

function login({ email, password }) {
  return async function loginFlow(flowStore, store, root) {
    const res = await Api.Auth.login({ email, password });
    Api.Auth.setToken(res.data.token);
    root.viewer.setViewer(res.data.user);
    store.setIsLoggedIn(true);
  };
}

function register({ fullName, email, password }) {
  return async function registerFlow(flowStore, store, root) {
    const {
      data: { token, user },
    } = await Api.Auth.register({
      fullName,
      email,
      password,
    });

    Api.Auth.setToken(token);
    store.setIsLoggedIn(true);
    root.viewer.setViewer(user);
  };
}
