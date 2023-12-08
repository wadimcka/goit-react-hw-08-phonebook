import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://656b5633dac3630cf72801aa.mockapi.io/';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const unsetToken = token => {
  instance.defaults.headers.common.Authorization = ``;
};

export const getRegistrUser = async userData => {
  const response = await instance.post('/users/signup', userData);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    toast.warn('error');
    throw new Error('User failed to registr. Status: ' + response.status);
  }
  return data;
};

export const getLogInUser = async userData => {
  const response = await instance.post('/users/login', userData);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('User failed to LogIn. Status: ' + response.status);
  }
  return data;
};

export const refreshCurrentUser = async userData => {
  const response = await instance.get('/users/current');
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('User failed to LogIn. Status: ' + response.status);
  }
  return data;
};

export const getLogOutUser = async userData => {
  const response = await instance.post('/users/logout');
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('User failed to LogIn. Status: ' + response.status);
  }
  return data;
};

export const getAllContacts = async () => {
  const response = await instance.get('/contacts');
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data;
};

export const getAddedContact = async contact => {
  const response = await instance.post('/contacts', contact);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data;
};

export const getDeletedContact = async (id, thunkAPI) => {
  const response = await instance.delete(`/contacts/${id}`);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data;
};
