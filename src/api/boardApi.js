import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchBoards = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/board?page=${page}`);
  return response.data;
};

export const fetchBoard = async (id) => {
  const response = await axios.get(`${BASE_URL}/board/${id}`);
  return response.data;
};

export const createBoard = async (data) => {
  const response = await axios.post(`${BASE_URL}/board`, data);
  return response.data;
};

export const updateBoard = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/board/${id}`, data);
  return response.data;
};

export const deleteBoard = async (id) => {
  await axios.delete(`${BASE_URL}/board/${id}`);
};