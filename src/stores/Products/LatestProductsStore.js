import { types } from 'mobx-state-tree';
import Api from '../../api';
import { LatestProductCollectionSchema } from '../schemas';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

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
  return async function fetchLatestFlow(flowStore, store) {
    store.setItems([]);
    const res = await Api.Products.fetchLatest();
    // const { result, entities } = normalize(
    //   res.data,
    //   LatestProductCollectionSchema,
    // );
    // root.entities.merge(entities);

    const result = flowStore.merge(
      res.data,
      LatestProductCollectionSchema,
    );
    store.setItems(result);

    // const ids = res.data.map((item) => {
    //   root.entities.products.add(item.id, item);
    //   return item.id;
    // });
    // store.setItems(ids);
  };
}
