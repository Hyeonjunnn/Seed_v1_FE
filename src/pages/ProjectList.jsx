import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectList = () => {
  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">프로젝트</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.no - a.no)
          .map((project) => (
            <ProjectCard key={project.no} project={project} />
          ))}
      </div>
    </div>
  );
};

export default ProjectList;