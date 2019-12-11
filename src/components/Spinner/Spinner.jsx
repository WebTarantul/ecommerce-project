import React from 'react';
import cn from 'classnames/bind';
import s from './Spinner.module.scss';
import { ReactComponent as SpinnerImg } from './spinner.svg';

const cx = cn.bind(s);

const Spinner = ({ className, ...props }) => {
  return (
    <div className={cx('spinner', className)} {...props}>
      <SpinnerImg />
    </div>
  );
};

export default Spinner;
