import axios from 'axios';

const api = axios.create({
  baseURL: 'https://loac-cents-api.herokuapp.com'
});

export default api;
