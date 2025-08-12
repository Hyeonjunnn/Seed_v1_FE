import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminProjectTable from "../../components/admin/AdminProjectTable";
import AdminProjectModal from "../../components/admin/AdminProjectModal";
import { fetchProjects, createProject, updateProject, deleteProject } from "../../api/projectApi";

const ProjectsPage = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(["projects"], fetchProjects);

  const deleteMutation = useMutation(deleteProject, {
    onSuccess: () => queryClient.invalidateQueries(["projects"]),
  });
  const createMutation = useMutation(createProject, {
    onSuccess: () => queryClient.invalidateQueries(["projects"]),
  });
  const updateMutation = useMutation(({ projectNo, data }) => updateProject(projectNo, data), {
    onSuccess: () => queryClient.invalidateQueries(["projects"]),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModalForNew = () => {
    setSelectedProject(null);
    setModalOpen(true);
  };
  const openModalForEdit = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
  const handleDelete = (projectNo) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteMutation.mutate(projectNo);
    }
  };
  const handleSubmit = (formData) => {
    if (selectedProject) {
      updateMutation.mutate({ projectNo: selectedProject.projectNo, data: formData });
    } else {
      createMutation.mutate(formData);
    }
    closeModal();
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">프로젝트 관리</h1>
        <button
          onClick={openModalForNew}
          className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          신규 프로젝트 등록
        </button>
      </div>

      {isLoading && <p className="text-center text-gray-500">로딩 중...</p>}
      {isError && <p className="text-center text-red-500">데이터 불러오기 실패</p>}

      {data && (
        <AdminProjectTable
          projects={data.content}
          onEdit={openModalForEdit}
          onDelete={handleDelete}
          deleteLoading={deleteMutation.isLoading}
        />
      )}

      {modalOpen && (
        <AdminProjectModal
          project={selectedProject}
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </AdminLayout>
  );
};

export default ProjectsPage;