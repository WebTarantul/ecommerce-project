/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Search from 'src/components/Header/components/Search/Search';
import Header from 'src/components/Header/Header';
import withFooter from 'src/components/HOCs/withFooter/withFooter';
import s from './Home.module.scss';

const Home = () => (
  <div className={s.wrapper}>
    <Header>
      <Search />
    </Header>
  </div>
);

export default withFooter(Home);
