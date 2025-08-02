import api from './axiosInstance'; // axios 인스턴스 import

export const fetchBoardCategories = async () => {
  const res = await api.get('/board-category');
  return res.data; // 백엔드 응답에 맞게 조정하세요
};