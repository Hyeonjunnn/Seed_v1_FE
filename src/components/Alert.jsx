import React, { useEffect, useState } from 'react';
import useAlertStore from '../store/alertStore';

const pastelColors = {
  success: {
    background: '#A7F3D0', // 연한 민트
    text: '#065F46',       // 짙은 초록
  },
  error: {
    background: '#FECACA', // 연한 핑크
    text: '#991B1B',       // 짙은 빨강
  },
  info: {
    background: '#BFDBFE', // 연한 하늘색
    text: '#1E40AF',       // 짙은 파랑
  },
  default: {
    background: '#E5E7EB', // 연한 회색
    text: '#374151',       // 짙은 회색
  }
};

const Alert = () => {
  const { message, type, visible, hideAlert } = useAlertStore();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(() => hideAlert(), 300);
      }, 2000);
      return () => {
        clearTimeout(timer);
        setShow(false);
      };
    }
  }, [visible, hideAlert]);

  if (!visible && !show) return null;

  const colors = pastelColors[type] || pastelColors.default;

  const iconSvg = {
    success: (
      <svg
        className="w-5 h-5 mr-2 inline-block"
        fill="none"
        stroke={colors.text}
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg
        className="w-5 h-5 mr-2 inline-block"
        fill="none"
        stroke={colors.text}
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg
        className="w-5 h-5 mr-2 inline-block"
        fill="none"
        stroke={colors.text}
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  };

  return (
    <div
      className={`
        fixed top-5 left-1/2 transform -translate-x-1/2
        px-6 py-3 rounded-md shadow-lg z-50
        cursor-pointer select-none
        flex items-center max-w-xs md:max-w-md
        transition-transform duration-300 ease-in-out
        ${show ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
      role="alert"
      onClick={() => {
        setShow(false);
        setTimeout(() => hideAlert(), 300);
      }}
      aria-live="assertive"
      aria-atomic="true"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      {iconSvg[type] || null}
      <span className="break-words">{message}</span>
    </div>
  );
};

export default Alert;