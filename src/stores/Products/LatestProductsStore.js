import { types } from 'mobx-state-tree';
import { ProductModel } from './ProductModel';
import { asyncModel } from '../utils';
import Api from '../../api';

export const LatestProductsStore = types
  .model('LatestProductsStore', {
    items: types.array(types.reference(ProductModel)),
    fetchLatest: asyncModel(fetchLatest),
  })
  .actions((self) => ({
    setItems(items) {
      self.items = items;
    },
  }));

function fetchLatest() {
  return async function fetchLatestFlow(flowStore, store, root) {
    store.setItems([]);
    const res = await Api.Products.fetchLatest();
    const ids = res.data.map((item) => {
      root.entities.products.add(item.id, item);
      return item.id;
    });
    store.setItems(ids);
  };
}
