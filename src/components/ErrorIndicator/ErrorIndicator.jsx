/* eslint-disable import/no-unresolved */
import React from 'react';
import s from './ErrorIndicator.module.scss';
import errorImg from './cloud.svg';

const ErrorIndicator = () => (
  <div className={s.errorIndicator}>
    <p className={s.text}>
      <b>Something went wrong!</b>
    </p>
    <img className={s.img} src={errorImg} alt="error" width="100" />
  </div>
);

export default ErrorIndicator;
