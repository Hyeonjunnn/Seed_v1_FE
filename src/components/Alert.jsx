import React, { useEffect } from 'react';
import useAlertStore from '../store/alertStore';

const Alert = () => {
  const { message, type, visible, hideAlert } = useAlertStore();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 3000); // 3초 후 자동 사라짐
      return () => clearTimeout(timer);
    }
  }, [visible, hideAlert]);

  if (!visible) return null;

  const bgColor = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  }[type] || 'bg-gray-600';

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-3 rounded-md shadow-lg z-50 cursor-pointer select-none`}
      role="alert"
      onClick={hideAlert}
    >
      {message}
    </div>
  );
};

export default Alert;