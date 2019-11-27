/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ProductView from 'src/components/ProductView/ProductView';
import NotFound from 'src/components/NotFound/NotFound';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import Home from '../Home/Home';
import Product from '../Product/Product';

const Main = () => (
  <div className="MainWrapper">
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.product} component={Product} />

      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Main;
