import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { techIcons, brandColors } from '../utils/techIcons';

const ProjectDetail = () => {
  const { no } = useParams();
  const project = projects.find((p) => p.no === parseInt(no));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        
        {/* 제목 */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>

        {/* 설명 */}
        <p className="text-gray-700 mb-6">{project.description}</p>

        {/* 기술 스택 */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">기술 스택</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => {
                const Icon = techIcons[tech];
                const color = brandColors[tech] || '#6B7280';
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-full"
                    style={{
                      backgroundColor: `${color}20`, // 배경은 투명도 20%
                      color: color,
                      border: `1px solid ${color}`
                    }}
                  >
                    {Icon && <Icon size={18} />}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* GitHub Links */}
        {project.githubLinks && project.githubLinks.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h2>
            <ul className="list-disc pl-5 space-y-1">
              {project.githubLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Demo */}
        {project.demo && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Demo</h2>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline break-all"
            >
              {project.demo}
            </a>
          </div>
        )}

        {/* 상세 설명 */}
        <div className="mt-8 text-gray-600 whitespace-pre-line">
          {project.details || '이 프로젝트에 대한 상세 설명이 곧 추가될 예정입니다.'}
        </div>

        {/* 돌아가기 */}
        <div className="mt-8">
          <Link to="/portfolio" className="text-indigo-600 hover:underline">
            ← 포트폴리오 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;