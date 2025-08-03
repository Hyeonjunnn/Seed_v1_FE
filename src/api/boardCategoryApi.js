import api from './axiosInstance';

export const fetchBoardCategories = async () => {
  const res = await api.get('/board-category');
  return res.data;
};