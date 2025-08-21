import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://mybus.sccwy.com/backend/public/api',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
  }
});

export default apiClient;
