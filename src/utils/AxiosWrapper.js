import axios from 'axios';

const baseURL = process.env.BASE_URL;
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add response interceptor to handle 401 Unauthorized responses
axiosInstance.interceptors.response.use(
  (response) => {
    // If the request was successful, return the response
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized - redirect to login
    if (error.response && error.response.status === 401) {
      const loginUrl = error.response.data?.loginUrl || `${baseURL || '/'}auth/login`;
      // Redirect to login page
      window.location.href = loginUrl;
      return Promise.reject(error);
    }
    // For other errors, just reject with the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
