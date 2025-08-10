import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import useAlertStore from '../store/alertStore';

const Logout = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const showAlert = useAlertStore((state) => state.showAlert);

  useEffect(() => {
    logout();
    showAlert('로그아웃 되었습니다.', 'success');
    navigate('/');
  }, [logout, navigate, showAlert]);

  return null;
};

export default Logout;