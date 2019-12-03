/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import Search from 'src/components/Header/components/Search/Search';
import { observer } from 'mobx-react';
import LatestProducts from 'src/components/LatestProducts/LatestProducts';
import Header from 'src/components/Header/Header';
import withFooter from 'src/components/HOCs/withFooter/withFooter';
import s from './Home.module.scss';

const Home = () => (
  <div className={s.wrapper}>
    <Header>
      <Search />
    </Header>
    <LatestProducts />
  </div>
);

export default observer(withFooter(Home));
