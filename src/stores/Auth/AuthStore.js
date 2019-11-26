import { types, flow, getRoot, getParent } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(loginFlow),
    register: asyncModel(registerFlow),
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

function loginFlow({ email, password }) {
  return flow(function* login(store) {
    const res = yield Api.Auth.login({ email, password });
    Api.Auth.setToken(res.data.token);
    getRoot(store).viewer.setViewer(res.data.user);
    getParent(store).setIsLoggedIn(true);
  });
}

function registerFlow({ fullName, email, password }) {
  return flow(function* register(store) {
    try {
      store.start();
      const {
        data: { token, user },
      } = yield Api.Auth.register({
        fullName,
        email,
        password,
      });
      Api.Auth.setToken(token);
      getRoot(store).viewer.setViewer(user);
      store.success();
    } catch (error) {
      console.error(error.status);
    }
  });
}
