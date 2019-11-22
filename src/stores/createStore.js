import { createContext, useContext } from 'react';
import { RootStore } from './RootStore';

export function createStore() {
  const root = RootStore.create();
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
