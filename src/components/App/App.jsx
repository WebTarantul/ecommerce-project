import Reactotron from 'reactotron-react-js';
import React, { useEffect } from 'react';
import { Router } from 'src/scenes/routes';
import { Provider, createStore } from 'src/stores/createStore';
import s from './App.module.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const rootStore = createStore();
rootStore.bootstrap();

const App = () => {
  return (
    <div className={s.wrapper}>
      <Provider value={rootStore}>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </Provider>
    </div>
  );
};
export default App;

// Reactotron.trackMstNode(rootStore);
