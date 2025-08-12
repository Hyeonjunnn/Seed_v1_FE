import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '../api/projectApi';
import ProjectCard from './ProjectCard';
import GlobalLoading from '../components/GlobalLoading';

const ProjectsSection = () => {
  const { data: projectResponseDtos, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  if (isLoading) return <GlobalLoading />;
  if (isError) return <p className="text-center text-red-500">프로젝트를 불러오는 중 오류가 발생했습니다.</p>;

  const projects = Array.isArray(projectResponseDtos?.content)
    ? projectResponseDtos.content
    : [];

  return (
    <section className="min-h-screen py-12 px-6">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">프로젝트</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.projectNo - a.projectNo)
          .slice(0, 6)
          .map((project) => (
            <ProjectCard key={project.projectNo} project={project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;