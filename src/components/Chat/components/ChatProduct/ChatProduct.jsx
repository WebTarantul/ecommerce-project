import React from 'react';
import cn from 'classnames/bind';

import s from './ChatProduct.module.scss';

const cx = cn.bind(s);

const ChatProduct = ({
  product,
  className,
  rightIcon: RightIcon,
  ...props
}) => (
  <div className={cx('product', className)}>
    <img
      src={(product.photos && product.photos[0]) || '/'}
      alt={product.title}
    />
    <div className={s.right}>
      <p className={s.title}>{product.title}</p>
      <p className={s.price}>
        <b>{product.price}</b>
      </p>
    </div>
  </div>
);

export default ChatProduct;
