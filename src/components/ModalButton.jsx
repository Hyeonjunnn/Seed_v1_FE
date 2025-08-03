import React from 'react';
import useUIStore from '../store/uiStore';

const ModalButton = () => {
  const openModal = useUIStore((state) => state.openModal);

  return (
    <button
      onClick={openModal}
      className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
    >
      모달 열기
    </button>
  );
};

export default ModalButton;