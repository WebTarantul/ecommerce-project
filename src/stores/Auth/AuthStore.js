import { types, flow, getRoot, getParent } from 'mobx-state-tree';
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
  return flow(function* loginFlow(flowStore, store, root) {
    const res = yield Api.Auth.login({ email, password });
    Api.Auth.setToken(res.data.token);
    root.viewer.setViewer(res.data.user);
    store.setIsLoggedIn(true);
  });
}

function register({ fullName, email, password }) {
  return flow(function* registerFlow(flowStore) {
    try {
      flowStore.start();
      const {
        data: { token, user },
      } = yield Api.Auth.register({
        fullName,
        email,
        password,
      });
      Api.Auth.setToken(token);
      getRoot(flowStore).viewer.setViewer(user);
      getParent(flowStore).setIsLoggedIn(true);
      flowStore.success();
    } catch (error) {
      console.error(error.status);
      flowStore.isError = true;
    }
  });
}
