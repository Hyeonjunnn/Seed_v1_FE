import React from "react";
import AdminProjectForm from "./AdminProjectForm";

const AdminProjectModal = ({ project, onClose, onSubmit }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-4xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <h2
          id="modal-title"
          className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3"
        >
          {project ? "프로젝트 수정" : "신규 프로젝트 등록"}
        </h2>
        <AdminProjectForm initialData={project} onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
};

export default AdminProjectModal;