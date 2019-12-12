import React from 'react';
import s from './ErrorBar.module.scss';

const ErrorBar = ({ text, ...props }) => (
  <div className={s.wrapper}>
    <p className={s.text}>{text}</p>
  </div>
);

export default ErrorBar;
