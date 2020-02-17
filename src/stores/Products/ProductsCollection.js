import { createCollection, asyncModel } from '../utils';
import { ProductModel } from './ProductModel';
import Api from 'src/api';

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

function getProduct(id) {
  return async function getProductFlow(flowStore, store) {
    const res = await Api.Products.fetchProductById(id);
    store.add(res.data.id, res.data);
  };
}
