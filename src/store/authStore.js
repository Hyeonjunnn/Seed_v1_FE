import { create } from 'zustand';
import api from '../api/axiosInstance';

const storedUser = localStorage.getItem('user');
const initialUser = storedUser ? JSON.parse(storedUser) : null;

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
    const { accessToken, refreshToken } = userData;
    const decoded = decodeToken(accessToken);

    const updatedUser = {
      ...userData,
      email: decoded?.email || null,
      role: decoded?.role || null,
      accessToken,
      refreshToken,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    set({ user: updatedUser });
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },

  refreshAccessToken: async () => {
    const { user } = get();
    if (!user?.refreshToken) {
      get().logout();
      return null;
    }

    try {
      const response = await api.post('/auth/refresh', {
        refreshToken: user.refreshToken,
      });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
      const decoded = decodeToken(newAccessToken);

      const updatedUser = {
        ...user,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        role: decoded?.role || null,
        email: decoded?.email || user.email,
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      set({ user: updatedUser });
      return newAccessToken;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      get().logout();
      return null;
    }
  },
}));

export default useAuthStore;