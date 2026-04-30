import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' });
export const getProducts = () => API.get('/products');
export const getAnnouncements = () => API.get('/announcements');
export const getFaqs = () => API.get('/faqs');
export const createLead = (data) => API.post('/leads', data);
