import { createContext, useContext } from 'react';
import { RootStore } from './RootStore';

export function createStore() {
  const root = RootStore.create();
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable global-require */
    require('mst-middlewares').connectReduxDevtools(
      require('remotedev'),
      root,
    );
    /* eslint-enable global-require */
  }
  return root;
}

const RootContext = createContext(null);

export const { Provider } = RootContext;

export function useStore(mapStateToProps) {
  const store = useContext(RootContext);
  if (typeof mapStateToProps === 'function') {
    return mapStateToProps(store);
  }
  return store;
}
