import React, { Fragment } from 'react';
import s from './withFooter.module.scss';
import Footer from 'src/components/Footer/Footer';

const withFooter = (WrappedComponent) => ({ ...props }) => (
  <div className={s.wrapper}>
    <WrappedComponent {...props} />
    <Footer />

  </div>
);

export default  withFooter;
