import Axios from 'axios'

const domain = 'http://10.71.0.115';
const baseURL = `${domain}/fias-search/rest`;

export default Axios.create({baseURL});