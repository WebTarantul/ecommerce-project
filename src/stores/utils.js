import { types } from 'mobx-state-tree';

export function asyncModel(thunk, auto = true) {
  const AsyncModel = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
    })
    .actions((self) => ({
      run(...args) {
        const promise = thunk(...args)(self);
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
        console.error(error);
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

const colorsArr = [
  'red',
  'black',
  'pink',
  'yellow',
  'red',
  'black',
  'pink',
  'yellow',
  'red',
  'black',
  'pink',
  'yellow',
  'red',
  'black',
  'pink',
  'yellow',
];

export function getColorFromInitials(initials) {
  const code = initials.charCodeAt(0) + initials.charCodeAt(1);
  const index = code % colorsArr.length;

  return colorsArr[index];
}
