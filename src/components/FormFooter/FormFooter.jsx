import React from 'react';
import Form from '../Form/Form';
import s from './FormFooter.module.scss';

const FormFooter = ({ children }) => (
  <footer className={s.footer}>
    <Form className={s.formWrapper}>{children}</Form>
  </footer>
);

export default FormFooter;
