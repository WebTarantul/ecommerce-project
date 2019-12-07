import Api from 'src/api';
import { useStore } from '../createStore';
import { ProductSchema } from '../schemas';
import { asyncModel, createCollection } from '../utils';
import { ProductModel } from './ProductModel';

export function useProductsCollection() {
  const store = useStore();

  return store.entities.products;
}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

function getProduct(id) {
  return async function getProductFlow(flowStore) {
    const res = await Api.Products.fetchProductById(id);
    // const { entities } = normalize(res.data, ProductSchema);
    flowStore.merge(res.data, ProductSchema);

    // root.entities.users.add(res.data.owner.id, res.data.owner);
    // store.add(res.data.id, {
    //   ...res.data,
    //   owner: +res.data.owner.id,
    // });
  };
}
