import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';
import Auth from './Auth/Auth';
import Home from './Home/Home';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  resetPassword: '/auth/password',
};

export const PrivateRoute = observer(
  ({ component: Component, ...props }) => {
    const store = useStore();
    return (
      <Route
        {...props}
        render={(...renderProps) => {
          return store.auth.isLoggedIn ? (
            <Redirect to={routes.home} />
          ) : (
            <Component {...renderProps} />
          );
        }}
      />
    );
  },
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.home} component={Home} exact />
        <PrivateRoute path={routes.auth} component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};
