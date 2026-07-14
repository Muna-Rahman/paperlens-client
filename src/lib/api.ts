import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  // FIXED: Tells Axios to automatically forward HTTP-Only cookies/sessions across origins
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for clear global error formatting
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

export default api;