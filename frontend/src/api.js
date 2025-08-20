import axios from 'axios';

/**
 * Create a configured instance of Axios.
 * This instance can be used throughout the application to make API requests.
 */
const apiClient = axios.create({
    // The base URL for all API requests.
    // This points to the 'api' prefix of your Laravel backend.
    // You may need to adjust the domain for your production environment.
    baseURL: 'http://mybus.sccwy.com/backend/public/api', 
    
    // Set the headers to indicate that we are sending and accepting JSON.
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

/**
 * Add a request interceptor to include the Authorization token.
 * This function will be called before every request is sent.
 */
apiClient.interceptors.request.use(config => {
    // Retrieve the token from local storage.
    const token = localStorage.getItem('auth_token');
    
    // If the token exists, add it to the Authorization header.
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, error => {
    // Handle request errors.
    return Promise.reject(error);
});

export default apiClient;
