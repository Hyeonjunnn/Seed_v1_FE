import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">프로젝트</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.no - a.no)
          .slice(0, 6)
          .map((project) => (
            <ProjectCard key={project.no} project={project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;