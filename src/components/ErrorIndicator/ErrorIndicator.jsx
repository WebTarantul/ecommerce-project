/* eslint-disable import/no-unresolved */
import React from 'react';
import cn from 'classnames/bind';
import s from './ErrorIndicator.module.scss';
import errorImg from './cloud.svg';

const cx = cn.bind(s);

const ErrorIndicator = ({
  text = 'Something went wrong!',
  withImage = true,
  className,
  ...props
}) => (
  <div className={cx('errorIndicator', className)} {...props}>
    <p className={s.text}>
      <b>{text}</b>
    </p>
    {withImage && (
      <img className={s.img} src={errorImg} alt="error" width="100" />
    )}
  </div>
);

export default ErrorIndicator;
