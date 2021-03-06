/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import NotFound from 'src/components/NotFound/NotFound';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import Home from '../Home/Home';
import Product from '../Product/Product';
import ProductAdd from '../ProductAdd/ProductAdd';
import ProfileList from '../ProfileList/ProfileList';
import SavedProducts from '../SavedProducts/SavedProducts';
import Inbox from '../Inbox/Inbox';

const Main = () => (
  <div className="MainWrapper">
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.productAdd} component={ProductAdd} exact />
      <Route path={routes.savedProducts} component={SavedProducts} />
      <Route path={routes.userProducts} component={ProfileList} />
      <Route path={routes.product} component={Product} />
      <Route path={routes.inbox} component={Inbox} />

      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Main;
