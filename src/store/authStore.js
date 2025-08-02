import { create } from 'zustand';

// localStorage에서 초기값 불러오기
const storedUser = localStorage.getItem('user');
const initialUser = storedUser ? JSON.parse(storedUser) : null;

const useAuthStore = create((set, get) => ({
  user: initialUser,
  get isLoggedIn() {
    return !!get().user;
  },

  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    set({ user: userData });
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));

export default useAuthStore;