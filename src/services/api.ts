import { Axios } from 'axios';

const api = new Axios({ baseURL: 'http://192.168.0.14:3000/api' });

export default api;
