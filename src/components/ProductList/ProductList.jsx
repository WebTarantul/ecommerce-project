import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ProductItem from '../ProductItem/ProductItem';
import s from './ProductList.module.scss';

const ProductList = ({ productList, ...props }) => (
  <div {...props}>
    <div className={s.productList}>
      <ul className={s.list}>
        {productList.map((item, index) => {
          if (item) {
            return (
              <ProductItem
                key={`${item.id}_index:${index}`}
                product={item}
              />
            );
          }
          return null;
        })}
      </ul>
    </div>
  </div>
);

ProductList.propTypes = {
  productList: PropTypes.array,
};

export default observer(ProductList);
