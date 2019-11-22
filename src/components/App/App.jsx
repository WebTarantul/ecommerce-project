import React, { useEffect } from 'react';
import { Router } from 'src/scenes/routes';
import { onSnapshot } from 'mobx-state-tree';
import { Provider, createStore } from 'src/stores/createStore';
import s from './App.module.scss';

const rootStore = createStore();

const App = () => {
  onSnapshot(rootStore, (snap) => console.log(snap));
  useEffect(() => {
    rootStore.bootstrap();
  }, []);
  return (
    <div className={s.wrapper}>
      <Provider value={rootStore}>
        <Router />
      </Provider>
    </div>
  );
};
export default App;
