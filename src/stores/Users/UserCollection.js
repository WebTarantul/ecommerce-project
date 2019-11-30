import { createCollection } from '../utils';
import { UserModel } from '../Auth/UserModel';
import { useStore } from '../createStore';

export const useUsersCollection = () => {
  const store = useStore();
  return store.entities.users;
};

export const UsersCollection = createCollection(UserModel, {});
