import React from 'react';
import PropTypes from 'prop-types';
import IconsConfig from './IconsConfig';
import s from './Icon.module.scss';

const Icon = ({ name, ...props }) => {
  const IconC = IconsConfig[name];
  return <IconC {...props} />;
};

Icon.propTypes = {
  // bla: PropTypes.string,
};

Icon.defaultProps = {
  // bla: 'test',
};

export default Icon;
