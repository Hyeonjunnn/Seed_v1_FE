import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: 로그아웃 API 호출 또는 토큰 제거 처리
    localStorage.removeItem('token'); // 예시로 토큰 제거
    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;