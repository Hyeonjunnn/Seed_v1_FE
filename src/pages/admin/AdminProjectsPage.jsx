import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/projectApi";
import AdminProjectModal from "../../components/admin/AdminProjectModal";
import AdminProjectTable from "../../components/admin/AdminProjectTable";

const AdminProjectsPage = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      closeModal();
    },
  });

  const createMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      closeModal();
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ projectNo, data }) => updateProject(projectNo, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      closeModal();
    },
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
  };

  if (isLoading) return <p className="p-6 text-center text-gray-500">로딩 중...</p>;
  if (isError) return <p className="p-6 text-center text-red-500">데이터 불러오기 실패</p>;

  const projects = data?.content || [];

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">프로젝트 관리</h1>
            <button
            onClick={openModalForNew}
            className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition"
            >
            신규 프로젝트 등록
            </button>
        </div>

        <AdminProjectTable
            projects={projects}
            onEdit={openModalForEdit}
            onDelete={handleDelete}
            isDeleting={deleteMutation.isLoading}
        />

        {modalOpen && (
            <AdminProjectModal
            project={selectedProject}
            onClose={closeModal}
            onSubmit={handleSubmit}
            />
        )}
        </div>
    </div>
  );
};

export default AdminProjectsPage;