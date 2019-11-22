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

  logOut() {
    this.setToken(null);
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
};

export const Account = {
  getUser() {
    return axios.get('/api/account');
  },
};
