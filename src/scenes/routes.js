import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './Auth/Auth';
import Home from './Home/Home';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  resetPassword: '/auth/password',
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.home} component={Home} exact />
        <Route path={routes.auth} component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};
