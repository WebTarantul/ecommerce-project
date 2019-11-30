import Api from 'src/api';
import { createCollection, asyncModel } from '../utils';
import { ProductModel } from './ProductModel';
import { useStore } from '../createStore';
import { useUsersCollection } from '../Users/UserCollection';

export function useProductsCollection() {
  const store = useStore();

  return store.entities.products;
}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

function getProduct(id) {
  return async function getProductFlow(flowStore, store, root) {
    const res = await Api.Products.fetchProductById(id);
    root.entities.users.add(res.data.owner.id, res.data.owner);
    store.add(res.data.id, {
      ...res.data,
      owner: +res.data.owner.id,
    });
  };
}
