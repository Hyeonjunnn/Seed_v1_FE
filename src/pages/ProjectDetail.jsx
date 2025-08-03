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

  const techCategories = project.techCategories || {};

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        
        {/* 제목 */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>

        {/* 설명 */}
        <p className="text-gray-700 mb-6">{project.description}</p>

        {/* 프로젝트 기본 정보 */}
        <section className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm" aria-labelledby="project-info-title">
          <h2 id="project-info-title" className="text-xl font-semibold text-gray-800 mb-3">프로젝트 정보</h2>
          <p className="text-gray-700 mb-2"><strong>활동 기간:</strong> {project.period || '정보 없음'}</p>
          <p className="text-gray-700 mb-2"><strong>팀 구성:</strong> {project.team || '정보 없음'}</p>
          <p className="text-gray-700"><strong>나의 역할:</strong> {project.role || '정보 없음'}</p>
        </section>

        {/* 기술 스택 (카테고리별) */}
        <section className="mb-6" aria-labelledby="tech-stack-title">
          <h2 id="tech-stack-title" className="text-xl font-semibold text-gray-800 mb-3">기술 스택</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techCategories)
              .filter(([_, techs]) => Array.isArray(techs) && techs.length > 0)
              .map(([category, techs]) => (
                <div key={category} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-md font-semibold text-primary-700 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => {
                      const Icon = techIcons[tech];
                      const color = brandColors[tech] || '#6B7280';
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-1 px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: `${color}20`,
                            color: color,
                            border: `1px solid ${color}`
                          }}
                        >
                          {Icon && <Icon size={16} />}
                          <span className="text-sm">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        {/* GitHub Links */}
        {project.githubLinks?.length > 0 && (
          <section className="mb-6" aria-labelledby="github-links-title">
            <h2 id="github-links-title" className="text-xl font-semibold text-gray-800 mb-2">GitHub</h2>
            <ul className="list-disc pl-5 space-y-1">
              {project.githubLinks.map((link, index) => (
                <li key={index}>
                  <strong>{link.name}:</strong>{' '}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Link */}
        {project.link && (
          <section className="mb-6" aria-labelledby="demo-title">
            <h2 id="demo-title" className="text-xl font-semibold text-gray-800 mb-2">Link</h2>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline break-all"
            >
              {project.link}
            </a>
          </section>
        )}

        {/* 상세 설명 */}
        <section className="mt-8 text-gray-600 whitespace-pre-line" aria-label="상세 설명">
          {project.details || '이 프로젝트에 대한 상세 설명이 곧 추가될 예정입니다.'}
        </section>

        {/* 돌아가기 */}
        <div className="mt-8">
          <Link to="/project" className="text-indigo-600 hover:underline">
            ← 프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;