import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '../api/projectApi';
import ProjectCard from './ProjectCard';
import GlobalLoading from './GlobalLoading';

const ProjectsSection = ({ size = 9, backgroundColor = 'bg-primary-50' }) => {
  const {
    data: projectsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['projects', size],
    queryFn: () => fetchProjects(0, size),
  });

  if (isLoading) return <GlobalLoading />;
  if (isError)
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600">
        프로젝트를 불러오는 데 실패했습니다.
      </div>
    );

  const projects = Array.isArray(projectsData?.content)
    ? projectsData.content
    : [];

  const sortedProjects = projects.sort((a, b) => b.projectNo - a.projectNo);

  return (
    <section
      className={`${backgroundColor} min-h-screen py-12 px-6 overflow-x-hidden`}
    >
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center tracking-wide drop-shadow-sm">
        프로젝트
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.projectNo} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;