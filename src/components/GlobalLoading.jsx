import React from 'react';
import { useIsFetching } from '@tanstack/react-query';

const GlobalLoading = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-primary-500"></div>
        <span className="text-gray-700 font-medium">데이터를 불러오는 중...</span>
      </div>
    </div>
  );
};

export default GlobalLoading;