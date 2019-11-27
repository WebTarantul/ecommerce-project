import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header/Header';
import Search from 'src/components/Header/components/Search/Search';
import ProductView from 'src/components/ProductView/ProductView';
//import { Test } from './Product.styles';

const Product = (props) => (
  <>
    <Header>
      <Search />
    </Header>
    <ProductView />
  </>
);

Product.propTypes = {
  // bla: PropTypes.string,
};

Product.defaultProps = {
  // bla: 'test',
};

export default Product;
