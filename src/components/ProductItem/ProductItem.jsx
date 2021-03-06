import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useStore } from 'src/stores/createStore';
import { Link, generatePath } from 'react-router-dom';
import { observer } from 'mobx-react';
import { routes } from 'src/scenes/routes';
import Icon from '../Icon/Icon';
import s from './ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const store = useStore();
  const { title, price, photos, id, saved } = product;
  return (
    <>
      <li className={s.item}>
        <button
          type="button"
          className={s.favorite}
          onClick={() => {
            store.savedProducts.toggleSaved(id);
          }}
        >
          <Icon
            name="favorite"
            fill={saved ? 'none' : '#b7b7b7'}
            fillInner={saved ? '#349a89' : 'none'}
          />
        </button>
        <Link
          className={s.link}
          to={generatePath(routes.product, { id })}
        >
          <figure className={s.figure}>
            <img
              className={s.img}
              src={photos ? photos[0] : ''}
              alt="item name"
            />
          </figure>
          <span className={s.text}>
            <span className={s.name}>
              {title.length > 20 ? `${title.slice(0, 20)}...` : title}
            </span>
            <span className={s.prices}>
              <b className={s.price}>${price}</b>
            </span>
          </span>
        </Link>
      </li>
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default observer(ProductItem);
