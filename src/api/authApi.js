import api from './axiosInstance';

// 회원가입
export const signup = async (data) => {
  const res = await api.post('/auth/signup', data);
  return res.data;
};

// 로그인
export const login = async (data) => {
  const res = await api.post('/auth/login', data);
  // 토큰 반환 시 저장 로직은 컴포넌트나 Zustand 상태 관리에서 처리
  return res.data;
};

// 로그아웃
export const logout = async () => {
  const res = await api.post('/auth/logout');
  return res.data;
};
