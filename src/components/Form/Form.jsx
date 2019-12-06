import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import s from './Form.module.scss';

const cx = cn.bind(s);

const Form = ({ children, title, className, ...props }) => (
  <div className={cx('wrapper', className)}>
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
