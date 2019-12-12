import {
  onSnapshot,
  applySnapshot,
  getParent,
  getRoot,
  getIdentifier,
  isStateTreeNode,
  resolveIdentifier,
  types,
} from 'mobx-state-tree';
import { normalize } from 'normalizr';

export function asyncModel(thunk, auto = true) {
  const AsyncModel = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
      isSuccess: false,
    })
    .actions((self) => ({
      run(...args) {
        const promise = thunk(...args)(
          self,
          getParent(self),
          getRoot(self),
        );
        if (auto) {
          self._auto(promise);
        }
        return promise;
      },
      start() {
        self.isLoading = true;
        self.isError = false;
        self.isSuccess = false;
      },
      success() {
        self.isLoading = false;
        self.isError = false;
        self.isSuccess = true;
      },
      error(error) {
        self.isLoading = false;
        self.isSuccess = false;
        self.isError = true;
      },
      async _auto(promise) {
        try {
          self.start();
          await promise;
          self.success();
        } catch (error) {
          self.error(error);
          throw error;
        }
      },
      merge(data, schema) {
        const { result, entities } = normalize(data, schema);
        getRoot(self).entities.merge(entities);
        return result;
      },
    }));

  return types.optional(AsyncModel, {});
}

export function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    // eslint-disable-next-line no-undef
    const savedItems = store.savedProducts.items
      .map((i) => i && i.id)
      .filter((i) => !!i);

    localStorage.setItem(
      '___persist',
      JSON.stringify({
        viewer: {
          userModel: snapshot.viewer && snapshot.viewer.userModel,
          user: snapshot.viewer && snapshot.viewer.user,
        },
        auth: {
          isLoggedIn: snapshot.auth && snapshot.auth.isLoggedIn,
        },
        savedProducts: {
          items: savedItems,
        },
      }),
    );
  });

  function rehydrate() {
    // eslint-disable-next-line no-undef
    const snapshot = localStorage.getItem('___persist');
    if (snapshot) {
      applySnapshot(store, JSON.parse(snapshot));
    }
  }

  return {
    rehydrate,
  };
}

export function createCollection(ofModel, asyncModels = {}) {
  const collection = types
    .model('CollectionModel', {
      collection: types.map(ofModel),
      ...asyncModels,
    })
    .views((self) => ({
      get(key) {
        return self.collection.get(String(key));
      },
    }))
    .actions((self) => ({
      add(key, value) {
        self.collection.set(String(key), value);
      },
    }));

  return types.optional(collection, {});
}

export function safeReference(T) {
  return types.reference(T, {
    get(identifier, parent) {
      if (isStateTreeNode(identifier)) {
        identifier = getIdentifier(identifier);
      }
      return resolveIdentifier(T, parent, identifier);
    },
    set(value) {
      return value;
    },
  });
}
