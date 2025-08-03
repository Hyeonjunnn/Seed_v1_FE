import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { techIcons, brandColors } from '../utils/techIcons';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">프로젝트</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.no - a.no)
          .map((project) => (
            <div
              key={project.no}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {project.techStack.length <= 5 ? (
                  project.techStack.map((tech, index) => {
                    const Icon = techIcons[tech];
                    const color = brandColors[tech] || '#6B7280';
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-1 text-sm px-2 py-1 rounded-full whitespace-nowrap"
                        style={{
                          backgroundColor: `${color}20`,
                          color: color,
                          border: `1px solid ${color}`,
                        }}
                      >
                        {Icon && <Icon size={16} />}
                        <span>{tech}</span>
                      </div>
                    );
                  })
                ) : (
                  <>
                    {project.techStack.slice(0, 3).map((tech, index) => {
                      const Icon = techIcons[tech];
                      const color = brandColors[tech] || '#6B7280';
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-1 text-sm px-2 py-1 rounded-full whitespace-nowrap"
                          style={{
                            backgroundColor: `${color}20`,
                            color: color,
                            border: `1px solid ${color}`,
                          }}
                        >
                          {Icon && <Icon size={16} />}
                          <span>{tech}</span>
                        </div>
                      );
                    })}

                    <div className="relative group">
                      <span className="text-gray-500 text-xs cursor-pointer">
                        +{project.techStack.length - 3}
                      </span>
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                        {project.techStack.slice(3).join(', ')}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* 상세보기 버튼을 카드 하단 고정 */}
              <div className="mt-auto">
                <Link
                  to={`/project/${project.no}`}
                  className="text-indigo-600 hover:underline font-medium"
                >
                  상세보기 →
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;