import api from './axiosInstance';

export const fetchTechCategories = async () => {
  const res = await api.get('/techCategory');
  return res.data;
};