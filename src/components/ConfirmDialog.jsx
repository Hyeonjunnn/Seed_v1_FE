import React from 'react';
import useConfirmStore from '../store/confirmStore';

const ConfirmDialog = () => {
  const { visible, message, onConfirm, onCancel, hide } = useConfirmStore();

  if (!visible) return null;

  const handleConfirm = () => {
    onConfirm();
    hide();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    hide();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 mx-4">
        <p className="text-gray-800 text-lg font-semibold mb-6 whitespace-pre-line">{message}</p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={handleConfirm}
            className="px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition"
          >
            확인
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;