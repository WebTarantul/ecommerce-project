import { types, getParent } from 'mobx-state-tree';
import Api from 'src/api';
import { ProductModel } from './ProductModel';
import { asyncModel } from '../utils';
import { Products } from '../schemas';

export const OwnProductsStore = types
  .model('OwnProductsStore', {
    items: types.array(types.reference(ProductModel)),
    fetchItems: asyncModel(fetchItems),
  })
  .views((self) => ({
    get itemsQuantity() {
      return self.items.length;
    },
  }))
  .actions((self) => ({
    setItems(items) {
      self.items = items;
    },
  }));

function fetchItems() {
  return async function fetchItemsFlow(flowStore, store) {
    const userId = getParent(store).id;
    const res = await Api.Products.fetchUserProducts(userId);
    const result = flowStore.merge(res.data.list, Products);
    store.setItems(result);
  };
}
