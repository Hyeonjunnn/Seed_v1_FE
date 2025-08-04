import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { techIcons, brandColors } from '../utils/techIcons';

const ProjectDetail = () => {
  const { no } = useParams();
  const project = projects.find((p) => p.no === parseInt(no));

  const initialMainImage = project 
    ? project.image || (project.images && project.images.length > 0 ? project.images[0] : null)
    : null;

  const [mainImage, setMainImage] = useState(initialMainImage);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  const techCategories = project.techCategories || {};
  const features = project.features || [];

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">

        {/* 제목 */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>

        {/* 프로젝트 유형 */}
        {project.type && (
          <h4 className="text-sm font-medium text-indigo-500 mb-4">
            {project.type}
          </h4>
        )}
        
        {/* 설명 */}
        <p className="text-gray-700 mb-6">{project.description}</p>

        {/* 대표 이미지 */}
        {mainImage && (
          <div className="mb-6">
            <img
              src={mainImage}
              alt={`${project.name} 대표 이미지`}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        )}

        {/* 이미지 썸네일 (클릭하면 대표 이미지 변경) */}
        {(project.image || (project.images && project.images.length > 0)) && (
          <div className="mb-6 flex gap-3 overflow-x-auto">
            {/* 대표 이미지가 있으면 우선 보여주기 */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.name} 이미지 대표`}
                className={`w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${
                  mainImage === project.image ? 'border-indigo-600' : 'border-transparent'
                }`}
                onClick={() => setMainImage(project.image)}
              />
            )}

            {/* 추가 이미지들 */}
            {project.images && project.images.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`${project.name} 이미지 ${idx + 1}`}
                className={`w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${
                  mainImage === imgSrc ? 'border-indigo-600' : 'border-transparent'
                }`}
                onClick={() => setMainImage(imgSrc)}
              />
            ))}
          </div>
        )}

        {/* 프로젝트 기본 정보 */}
        <section className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm" aria-labelledby="project-info-title">
          <h2 id="project-info-title" className="text-xl font-semibold text-gray-800 mb-3">프로젝트 정보</h2>
          <p className="text-gray-700 mb-2"><strong>활동 기간:</strong> {project.period || '정보 없음'}</p>
          <p className="text-gray-700 mb-2"><strong>팀 구성:</strong> {project.team || '정보 없음'}</p>
          <p className="text-gray-700 mb-4"><strong>나의 담당:</strong> {project.role || '정보 없음'}</p>

          {/* 상세 설명 */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">상세 설명</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {project.details || '이 프로젝트에 대한 상세 설명이 곧 추가될 예정입니다.'}
            </p>
          </div>

          {/* 주요 기능 */}
          {features.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">주요 기능</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
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
            {project.link.includes('현재 서비스 중단') ? (
              <p className="text-gray-500">{project.link}</p>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline break-all"
              >
                {project.link}
              </a>
            )}
          </section>
        )}

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