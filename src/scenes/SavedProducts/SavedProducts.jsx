import React from 'react';
import SavedList from 'src/components/SavedList/SavedList';
import Header from 'src/components/Header/Header';
import Search from 'src/components/Header/components/Search/Search';

const SavedProducts = () => {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <SavedList />
    </>
  );
};

export default SavedProducts;
