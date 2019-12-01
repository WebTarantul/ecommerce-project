import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from 'src/components/Register/Register';
import Login from 'src/components/Login/Login';
import Header from 'src/components/Header/Header';
import withFooter from 'src/components/HOCs/withFooter/withFooter';
import ResetPassword from 'src/components/ResetPassword/ResetPassword';
import { routes } from '../routes';

const Auth = () => (
  <div className="AuthWrapper">
    <Header isLight />
    <Switch>
      <Route path={routes.register} component={Register} />
      <Route path={routes.login} component={Login} />
      <Route path={routes.resetPassword} component={ResetPassword} />
    </Switch>
  </div>
);

export default withFooter(Auth);
