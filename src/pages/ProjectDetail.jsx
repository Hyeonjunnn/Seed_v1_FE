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
    <>
      <style>
      {`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            padding-top: 5mm !important;
            margin-top: 0 !important;
          }

          .print-container {
            padding-top: 5mm !important;
          }

          h1 {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }

          .no-print,
          .main-image img,
          .thumbnail-list {
            display: none !important;
          }

          .print-sections {
            grid-template-columns: 2fr 1.3fr !important;
          }

          .content-wrapper {
            max-width: 100% !important;
            padding: 10mm !important;
          }

          /* 인쇄 시 기술 스택 제목 숨기기 */
          .tech-stack > h2 {
            display: none !important;
          }
        }
      `}
      </style>

      <div className="min-h-screen bg-primary-50 py-12 px-6 print-container">
        <div className="max-w-[90%] mx-auto bg-white p-8 rounded-lg shadow-md content-wrapper">

          {/* 본문: 왼쪽 - 제목 포함 프로젝트 내용, 오른쪽 - 기술 스택 */}
          <div className="grid grid-cols-[3fr_1fr] gap-10 print-sections">

            {/* 왼쪽 영역: 제목 포함 */}
            <section className="project-content">

              {/* 제목 */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.name}</h1>
                {project.type && (
                  <h4 className="text-lg font-medium text-indigo-500 mb-4">{project.type}</h4>
                )}
              </div>

              {/* 이미지 (제목 아래) */}
              {mainImage && (
                <div className="mb-6 main-image">
                  <img
                    src={mainImage}
                    alt={`${project.name} 대표 이미지`}
                    className="rounded-lg object-cover"
                    style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                  />
                </div>
              )}

              {/* 썸네일 리스트 */}
              {(project.image || (project.images && project.images.length > 0)) && (
                <div className="mb-6 flex gap-3 overflow-x-auto thumbnail-list no-print">
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
                  {project.images &&
                    project.images.map((imgSrc, idx) => (
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

              {/* 프로젝트 정보, 상세 설명, 주요 기능 등 */}
              <div className="project-info">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">프로젝트 정보</h2>

                <div className="mb-2 text-gray-600">
                  <p><strong>활동 기간:</strong> {project.period || '정보 없음'}</p>
                  <p><strong>팀 구성:</strong> {project.team || '정보 없음'}</p>
                  <p><strong>나의 담당:</strong> {project.role || '정보 없음'}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">상세 설명</h3>
                  <p className="whitespace-pre-line">{project.details || '이 프로젝트에 대한 상세 설명이 곧 추가될 예정입니다.'}</p>
                </div>

                {features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">주요 기능</h3>
                    <ul className="list-disc list-inside">
                      {features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.githubLinks?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.githubLinks.map((link, index) => (
                        <li key={index}>
                          <strong>{link.name}:</strong>{' '}
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.link && (
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-0">Link:</h3>
                    {project.link.includes('현재 서비스 중단') ? (
                      <p className="mb-0">{project.link}</p>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline truncate"
                        style={{ maxWidth: '80vw' }}
                      >
                        {project.link}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* 오른쪽: 기술 스택 */}
            <section className="tech-stack">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">기술 스택</h2>
              <div className="grid grid-cols-1 gap-4">
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
                  ))}
              </div>
            </section>
          </div>

          {/* 돌아가기 버튼 */}
          <div className="mt-8 no-print">
            <Link to="/project" className="text-indigo-600 hover:underline">
              ← 프로젝트 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;