/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch } from 'react-router-dom';
import Header from 'src/components/Header/Header';
import withFooter from 'src/components/HOCs/withFooter/withFooter';
import Login from 'src/components/Login/Login';
import Register from 'src/components/Register/Register';
import ResetPassword from 'src/components/ResetPassword/ResetPassword';
import { PrivateRoute, routes } from '../routes';

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
