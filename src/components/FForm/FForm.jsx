import React from 'react';
import { Form } from 'formik';
import s from './FForm.module.scss';

const FForm = ({ children, title, classNameWrapper, ...props }) => (
  <div className={`${s.wrapper} ${classNameWrapper}`}>
    <Form {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </Form>
  </div>
);


export default FForm;
