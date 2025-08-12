import React from "react";
import AdminBoardForm from "./AdminBoardForm";

const AdminBoardModal = ({ board, onClose, onSubmit }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">
          {board ? "게시글 수정" : "신규 게시글 등록"}
        </h2>
        <AdminBoardForm initialData={board} onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
};

export default AdminBoardModal;