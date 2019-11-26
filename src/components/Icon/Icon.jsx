import React from 'react';
import IconsConfig from './IconsConfig';
import s from './Icon.module.scss';

const Icon = ({ name, ...props }) => {
  const IconC = IconsConfig[name];
  return <IconC {...props} />;
};

export default Icon;
