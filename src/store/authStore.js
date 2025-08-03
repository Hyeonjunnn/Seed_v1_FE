import { create } from 'zustand';

// localStorage에서 초기값 불러오기
const storedUser = localStorage.getItem('user');
const initialUser = storedUser ? JSON.parse(storedUser) : null;

// JWT 디코드 함수
const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

const useAuthStore = create((set, get) => ({
  user: initialUser,
  get isLoggedIn() {
    return !!get().user;
  },

  login: (userData) => {
    const { accessToken } = userData;
    const decoded = decodeToken(accessToken);

    const updatedUser = {
      ...userData,
      email: decoded?.email || null, // 토큰에서 이메일 추출
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    set({ user: updatedUser });
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));

export default useAuthStore;