/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ResetPassword from 'src/components/ResetPassword/ResetPassword';
import Register from 'src/components/Register/Register';
import Login from 'src/components/Login/Login';
import Header from 'src/components/Header/Header';
import withFooter from 'src/components/HOCs/withFooter/withFooter';
import { routes, PrivateRoute } from '../routes';

const Auth = () => (
  <div className="AuthWrapper">
    <Header isLight />
    <Switch>
      <PrivateRoute path={routes.register} component={Register} />
      <PrivateRoute path={routes.login} component={Login} />
      <PrivateRoute
        path={routes.resetPassword}
        component={ResetPassword}
      />
    </Switch>
  </div>
);

export default withFooter(Auth);
