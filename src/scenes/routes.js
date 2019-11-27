import { observer } from 'mobx-react';
import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useStore } from 'src/stores/createStore';
import Auth from './Auth/Auth';
import Main from './Main/Main';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  resetPassword: '/auth/password',
  product: '/products/:id',
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

export const Router = observer(() => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={routes.auth} component={Auth} />
        <Route component={Main} />
      </Switch>
    </BrowserRouter>
  );
});
