"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customInstance = exports.axiosInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.hallocasa.com';
exports.axiosInstance = axios_1.default.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
// Request interceptor for authentication
exports.axiosInstance.interceptors.request.use((config) => {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// Response interceptor for error handling
exports.axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            // Optionally redirect to login
            // window.location.href = '/login';
        }
    }
    return Promise.reject(error);
});
const customInstance = (config) => {
    const promise = (0, exports.axiosInstance)(config).then(({ data }) => data);
    return promise;
};
exports.customInstance = customInstance;
