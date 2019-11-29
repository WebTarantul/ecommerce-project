import React from 'react';
//import { Test } from './FTextarea.styles';

const FTextarea = ({ name, ...props }) => (
  <>
    <textarea name={name} cols="30" rows="8" {...props}></textarea>
  </>
);

export default FTextarea;
