import Api from 'src/api';
import { createCollection, asyncModel } from '../utils';
import { UserModel } from '../Auth/UserModel';
import { useStore } from '../createStore';
import { UserSchema } from '../schemas';

export const useUsersCollection = () => {
  const store = useStore();
  return store.entities.users;
};

export const UsersCollection = createCollection(UserModel, {
  fetchUser: asyncModel(fetchUser),
});

function fetchUser(userId) {
  return async function fetchUserFlow(flowStore) {
    const res = await Api.Users.fetchUserById(userId);
    flowStore.merge(res.data, UserSchema);
  };
}
