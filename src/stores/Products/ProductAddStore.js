import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';

export const ProductAddStore = types
  .model('ProductAddStore', {
    imageURLs: types.optional(types.array(types.string), []),
    fetchUploadImage: asyncModel(fetchUploadImage),
    addProduct: asyncModel(addProduct),
  })
  .actions((self) => ({
    setImageUrl(imageUrl) {
      self.imageURLs = [...self.imageURLs, imageUrl];
    },
    removeImage(imageUrl) {
      const idx = self.imageURLs.findIndex(imageUrl);
      if (idx > -1) {
        self.imageUrl = [self.imageURLs.splice(idx, 1)];
      }
    },
  }));

function fetchUploadImage(formData) {
  return async function fetchUploadImageFlow(flowStore, store) {
    const res = await Api.Products.uploadImage(formData);
    store.setImageUrl(res.data);
  };
}

function addProduct({ title, description, photos, location, price }) {
  return async function addProductFlow(flowStore, store, root) {
    const res = await Api.Products.addProduct({
      title,
      description,
      photos,
      location,
      price,
    });
    root.entities.products.add(res.data.id, res.data);
  };
}
