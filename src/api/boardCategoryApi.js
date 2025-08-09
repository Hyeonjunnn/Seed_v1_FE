import api from './axiosInstance';

export const fetchBoardCategories = async (method = '') => {
  const res = await api.get(`/board-category?method=${method}`);
  return res.data;
};