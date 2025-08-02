import axios from 'axios';
import useAuthStore from '../store/authStore';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// 요청할 때 토큰을 자동으로 넣는 인터셉터 설정
api.interceptors.request.use((config) => {
    const { user } = useAuthStore.getState();
    if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
});


export default api;