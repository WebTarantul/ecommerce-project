import React from 'react';
import {ReactComponent as Image} from './imageNotFound.svg'
import s from './NotFound.module.scss';

const NotFound = ({ text = 'Page is not found' }) => (
  <div className={s.wrapper}>
    <h1>{text}</h1>
    <Image />
  </div>
);

export default NotFound;
