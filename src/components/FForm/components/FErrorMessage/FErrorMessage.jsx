import React from 'react';
import { ErrorMessage } from 'formik';
import s from './FErrorMessage.module.scss';

const FErrorMessage = (props) => (
  <span className={s.error}>
    <ErrorMessage {...props} />
  </span>
);


export default FErrorMessage;
