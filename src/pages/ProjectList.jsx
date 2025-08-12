import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../api/projectApi';
import GlobalLoading from '../components/GlobalLoading';
import { useQuery } from '@tanstack/react-query';

const ProjectList = () => {
  const size = 9;

  const {
    data: projectsData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['projects', size],
    queryFn: () => fetchProjects(0, size),
  });

  if (isLoading) return <GlobalLoading />;

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600">
        프로젝트를 불러오는 데 실패했습니다.
      </div>
    );
  }

  const projects = projectsData?.content || [];

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">프로젝트</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.projectNo - a.projectNo)
          .map((project) => (
            <ProjectCard key={project.projectNo} project={project} />
          ))}
      </div>
    </div>
  );
};

export default ProjectList;