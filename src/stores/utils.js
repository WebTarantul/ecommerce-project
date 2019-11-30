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

export function asyncModel(thunk, auto = true) {
  const AsyncModel = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
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
      },
      success() {
        self.isLoading = false;
        self.isError = false;
      },
      error(error) {
        self.isLoading = false;
        self.isError = true;
        console.error(error.info || error);
      },
      async _auto(promise) {
        try {
          self.start();
          await promise;
          self.success();
        } catch (error) {
          self.error(error);
        }
      },
    }));

  return types.optional(AsyncModel, {});
}

export function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    // eslint-disable-next-line no-undef
    localStorage.setItem(
      '___persist',
      JSON.stringify({
        viewer: {
          user: snapshot.viewer && snapshot.viewer.user,
        },
        auth: {
          isLoggedIn: snapshot.auth && snapshot.auth.isLoggedIn,
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

export function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });
}

export function removeItemWithIndex(arr, idx) {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
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
