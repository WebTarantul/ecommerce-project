/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Profile from 'src/components/Profile/Profile';
import Header from 'src/components/Header/Header';
import Search from 'src/components/Header/components/Search/Search';
// import { Test } from './ProfileList.styles';

const ProfileList = () => (
  <>
    <Header>
      <Search />
    </Header>
    <Profile />
  </>
);

export default ProfileList;
