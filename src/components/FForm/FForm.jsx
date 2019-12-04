import React from 'react';
import { Form } from 'formik';
import cn from 'classnames/bind';
import s from './FForm.module.scss';

const cx = cn.bind(s);

const FForm = ({ children, title, classNameWrapper, ...props }) => (
  <div className={cx('wrapper', classNameWrapper)}>
    <Form {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </Form>
  </div>
);

export default FForm;
