import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // headers: { Authorization: 'Bearer token' }, // 필요시
});

export const fetchBoards = async (page = 0, size = 10, sort = 'boardNo,DESC', boardCategoryNo = 1) => {
  const res = await api.get(`/board?page=${page}&size=${size}&sort=${sort}&boardCategoryNo=${boardCategoryNo}`);
  return res.data;
};

export const fetchBoard = async (id) => {
  const res = await api.get(`/board/${id}`);
  return res.data;
};

export const createBoard = async (data) => {
  const res = await api.post(`/board`, data);
  return res.data;
};

export const updateBoard = async (id, data) => {
  const res = await api.put(`/board/${id}`, data);
  return res.data;
};

export const deleteBoard = async (id) => {
  await api.delete(`/board/${id}`);
};
