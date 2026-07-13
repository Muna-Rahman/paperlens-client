import axios from 'axios';

// Ensure the URL matches your local or deployed backend port/domain
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Crucial for receiving and sending httpOnly JWT cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor to format error messages consistently
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

export default api;