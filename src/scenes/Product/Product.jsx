import React from 'react';
import Header from 'src/components/Header/Header';
import Search from 'src/components/Header/components/Search/Search';
import ProductView from 'src/components/ProductView/ProductView';
import withFooter from 'src/components/HOCs/withFooter/withFooter';
// import { Test } from './Product.styles';

const Product = (props) => (
  <>
    <Header>
      <Search />
    </Header>
    <ProductView />
  </>
);

export default withFooter(Product);
