/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';

export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // eslint-disable-next-line no-undef
    localStorage.setItem('___token', token);
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    return axios.post('/api/auth/login', {
      email,
      password,
    });
  },

  register({ fullName, email, password }) {
    return axios.post('/api/auth/register', {
      fullName,
      email,
      password,
    });
  },

  logout() {
    this._token = null;
    // eslint-disable-next-line no-undef
    localStorage.removeItem('___token');
    axios.defaults.headers.common.Authorization = undefined;
  },
};

export const Account = {
  getUser() {
    return axios.get('/api/account');
  },
};

export const Products = {
  fetchLatest() {
    return axios.get('/api/products/latest');
  },
  fetchProductById(id) {
    return axios.get(`/api/products/${id}`);
  },
  uploadImage(formData) {
    return axios.post(`/api/upload/images`, formData);
  },
  addProduct({ title, description, photos, location, price }) {
    return axios.post(`/api/products`, {
      title,
      description,
      photos,
      location,
      price,
    });
  },
  fetchUserProducts(userId) {
    return axios.get(`/api/users/${userId}/products`);
  },
  fetchSavedProducts() {
    return axios.get(`/api/products/saved`);
  },
  postSavedProducts(productsIdsArray) {
    return axios.post(`/api/products/saved`, {
      ids: productsIdsArray,
    });
  },
  postSavedProduct(productId) {
    return axios.post(`/api/products/${productId}/saved`);
  },
  deleteSavedProduct(productId) {
    return axios.delete(`/api/products/${productId}/saved`);
  },
};

export const Users = {
  fetchUserById(userId) {
    return axios.get(`/api/users/${userId}`);
  },
};

export const Chats = {
  createChat(productId, message) {
    return axios.post(`/api/products/${productId}/createChat`, {
      message,
    });
  },
};
