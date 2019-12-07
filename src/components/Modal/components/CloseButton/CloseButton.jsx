import React from 'react';
// import { Test } from './CloseButton.styles';

const CloseButton = (props) => (
  <button aria-label="close modal" {...props}>
    <span>Close Modal</span>
  </button>
);

export default CloseButton;
