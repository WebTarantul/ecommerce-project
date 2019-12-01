import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'src/scenes/routes';
import s from './App.module.scss';
import Header from '../Header/Header';

const App = (props) => (
  <div className={s.wrapper}>
    <Router />
  </div>
);

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
