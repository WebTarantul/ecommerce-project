import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import s from './FormFooter.module.scss';

const FormFooter = ({ children }) => (
  <footer className={s.footer}>
    <Form className={s.formWrapper}>{children}</Form>
  </footer>
);

FormFooter.propTypes = {
  // bla: PropTypes.string,
};

FormFooter.defaultProps = {
  // bla: 'test',
};

export default FormFooter;
