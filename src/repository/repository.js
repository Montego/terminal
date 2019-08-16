import Axios from 'axios'

const domain = 'http://10.71.0.115';
// const domain = 'http://localhost:8080';
const baseURL = `${domain}/operator_api`;
export default Axios.create({baseURL});

