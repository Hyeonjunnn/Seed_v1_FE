import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { techIcons, brandColors } from '../data/techIcons';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">프로젝트</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.no - a.no) // no 기준 내림차순
          .map((project) => (
            <div
              key={project.no}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* 기술 스택 미리보기 (최대 3개) */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {project.techStack.slice(0, 3).map((tech, index) => {
                  const Icon = techIcons[tech];
                  const color = brandColors[tech] || '#6B7280'; // 기본 색상은 gray-500
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-1 text-sm px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: `${color}20`, // 투명 배경 (20% opacity)
                        color: color,
                        border: `1px solid ${color}`,
                      }}
                    >
                      {Icon && <Icon size={16} />}
                      <span>{tech}</span>
                    </div>
                  );
                })}
                {project.techStack.length > 3 && (
                  <span className="text-gray-400 text-xs">+{project.techStack.length - 3}</span>
                )}
              </div>

              <Link
                to={`/portfolio/${project.no}`}
                className="text-indigo-600 hover:underline font-medium"
              >
                상세보기 →
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;