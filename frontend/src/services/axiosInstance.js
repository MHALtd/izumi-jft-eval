// src/services/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_LINK, // Ganti PORT dengan port backend Anda
  headers: {
    "Content-Type": "application/json",
  },
});

// Tambahkan interceptor untuk menangani request dan response jika diperlukan
axiosInstance.interceptors.request.use(
  (config) => {
    // Lakukan sesuatu sebelum request dikirim
    return config;
  },
  (error) => {
    // Tangani error request
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Lakukan sesuatu dengan data response
    return response;
  },
  (error) => {
    // Tangani error response
    return Promise.reject(error);
  }
);

export default axiosInstance;
