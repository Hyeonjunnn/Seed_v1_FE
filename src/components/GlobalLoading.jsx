import React from 'react';
import { useIsFetching } from '@tanstack/react-query';

const GlobalLoading = () => {
  const isFetching = useIsFetching();

  if (isFetching === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg flex items-center gap-3">
        <svg
          className="animate-spin h-6 w-6 text-primary-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <span className="text-primary-700 font-semibold">로딩 중...</span>
      </div>
    </div>
  );
};

export default GlobalLoading;