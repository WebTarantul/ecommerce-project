import React from 'react';
import PropTypes from 'prop-types';
import s from './Footer.module.scss';

const Footer = (props) => (
  <div className={s.wrapper}>
    <div className={s.text}>
      Copyright © 2017. Privacy Policy.
    </div>
  </div>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
