import React from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.scss';

const Form = ({ children, title,className, ...props }) => (
  <div className={`${s.wrapper} ${className}`}>
    <form {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </form>
  </div>
);

Form.propTypes = {
  title: PropTypes.string,
};


export default Form;
