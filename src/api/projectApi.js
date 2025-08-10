import api from './axiosInstance';

export const fetchProjects = async () => {
  const res = await api.get('/project');
  return res.data;
};

export const fetchProject = async (projectNo) => {
  const res = await api.get(`/project/${projectNo}`);
  return res.data;
};

export const createProject = async (projectData) => {
  const res = await api.post('/project', projectData);
  return res.data;
};

export const updateProject = async (projectNo, projectData) => {
  const res = await api.put(`/project/${projectNo}`, projectData);
  return res.data;
};

export const deleteProject = async (projectNo) => {
  const res = await api.delete(`/project/${projectNo}`);
  return res.data;
};