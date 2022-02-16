import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://13.209.45.119:8080',
});
