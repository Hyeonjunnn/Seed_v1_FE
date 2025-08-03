import React from 'react';
import { Link } from 'react-router-dom';
import { techIcons, brandColors } from '../utils/techIcons';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/project/${project.no}`}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-transform flex flex-col cursor-pointer"
    >
      {/* 제목 */}
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.name}</h3>

      {/* 프로젝트 유형 */}
      {project.type && (
        <h4 className="text-sm font-medium text-indigo-500 mb-3">
          {project.type}
        </h4>
      )}

      {/* 설명 */}
      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

      {/* 기술 스택 */}
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

            {/* +N 버튼 (툴팁 포함) */}
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
    </Link>
  );
};

export default ProjectCard;