import React from 'react';
import s from './Spinner.module.scss';
import { ReactComponent as SpinnerImg } from './spinner.svg';

const Spinner = ({ className, ...props }) => {
  return (
    <div className={`${s.spinner} ${className}`} {...props}>
      <SpinnerImg />
    </div>
  );
};

export default Spinner;
