import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { techIcons } from '../utils/techIcons';

const ProjectsSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">프로젝트</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.no - a.no)
          .map((project) => (
            <div
              key={project.no}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">{project.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded"
                    >
                      {Icon && <Icon className="text-indigo-500" />}
                      <span>{tech}</span>
                    </div>
                  );
                })}
                {project.techStack.length > 3 && (
                  <span className="text-gray-400 text-xs">+{project.techStack.length - 3}</span>
                )}
              </div>

              <Link
                to={`/project/${project.no}`}
                className="text-indigo-600 hover:underline font-medium"
              >
                상세보기 →
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;