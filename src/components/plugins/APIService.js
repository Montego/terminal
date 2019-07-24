import axios from 'axios';


// const SERVER_URL = '/api';

// const SERVER_URL = 'http://10.71.0.115/operator_api/';
// const SERVER_URL2 = 'http://10.71.0.115/';


// const SERVER_URL = '/operator_api';
// const SERVER_URL2 = 'http://10.71.0.115/';


const SERVER_URL = 'http://10.71.0.115/operator_api/';
const SERVER_URL2 = 'http://10.71.0.115';

export const AXIOS = axios.create({
  // baseURL: `/api`
  baseURL: SERVER_URL

});
export const AXIOS_print = axios.create({
  baseURL: SERVER_URL2
})
