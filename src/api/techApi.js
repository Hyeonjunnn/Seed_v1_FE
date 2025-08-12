import api from './axiosInstance';

export const fetchTechs = async () => {
  const res = await api.get('/tech');
  return res.data;
};