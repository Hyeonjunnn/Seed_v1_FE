import api from './axiosInstance';

export const fetchBoards = async (page = 0, size = 10, sort = 'boardNo,DESC', boardCategoryNo = 1, boardTitle = '') => {
  const res = await api.get(`/board?page=${page}&size=${size}&sort=${sort}&boardCategoryNo=${boardCategoryNo}&boardTitle=${boardTitle}`);
  
  return res.data;
};

export const fetchBoard = async (boardNo) => {
  const res = await api.get(`/board/${boardNo}`);
  return res.data;
};

export const createBoard = async (data) => {
  const res = await api.post(`/board`, data);
  return res.data;
};

export const updateBoard = async (boardNo, data) => {
  const res = await api.put(`/board/${boardNo}`, data);
  return res.data;
};

export const deleteBoard = async (boardNo) => {
  await api.delete(`/board/${boardNo}`);
};