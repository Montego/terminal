import Axios from 'axios'

const domain = 'https://priem.szgmu.ru';
const baseURL = `${domain}/fias-search/rest`;

export default Axios.create({baseURL});