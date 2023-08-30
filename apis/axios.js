import { BASE_API_URL } from '@/constants/config';
import axios from 'axios';

const client = axios.create({
  baseURL: BASE_API_URL,
});

client.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.Accept = 'application/json';

  return config;
});

const request = async function (options) {
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    throw new Error(error.message);
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    onError(error);
  }
};

export default request;
