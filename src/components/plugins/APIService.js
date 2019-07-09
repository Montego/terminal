import axios from 'axios';

const SERVER_URL = '/api';
// const SERVER_URL = 'http://10.71.0.115/operator_api/';

export const AXIOS = axios.create({
  // baseURL: `/api`
  baseURL: SERVER_URL

});
