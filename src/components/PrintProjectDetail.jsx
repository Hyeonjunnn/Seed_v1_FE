import React, { useEffect, useState } from 'react';
import { techIcons, brandColors } from '../utils/techIcons';

const PrintProjectDetail = ({ project, techCategories }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (project) {
      setMainImage(
        project.image || (project.images && project.images.length > 0 ? project.images[0] : null)
      );
    }
  }, [project]);

  const features = project.feature ? project.feature.split(',').map(f => f.trim()) : [];
  const startedAtFormatted = project.startedAt
    ? new Date(project.startedAt).toLocaleDateString()
    : '정보 없음';
  const endedAtFormatted = project.endedAt
    ? new Date(project.endedAt).toLocaleDateString()
    : '현재';

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

            /* 그림자 제거 */
            .hover\\:shadow-md,
            .hover\\:shadow-lg,
            .shadow-sm,
            .shadow-md,
            .shadow-lg {
              box-shadow: none !important;
            }

            /* 프로젝트 및 기술 스택 섹션 */
            .project-detail-section,
            .tech-stack-section {
              max-width: 100% !important;
              margin: auto !important;
              margin-bottom: 20mm !important;
              background-color: white !important;
              padding: 15mm !important;
              border-radius: 0 !important;
              page-break-after: always;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
            }

            /* 링크 스타일: 밑줄 제거, 검정색, 줄바꿈 가능 */
            a {
              color: black !important;
              text-decoration: none !important;
              word-break: break-word !important;
            }

            /* 기술 스택 카드 그림자 제거, 항상 보이도록 */
            .tech-stack-section > div > div {
              box-shadow: none !important;
              background-color: #f9fafb !important; /* bg-gray-50 */
            }

            /* 화면용 요소 숨김 */
            .no-print,
            .main-image img,
            .thumbnail-list {
              display: none !important;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-primary-50 py-12 px-6 print-container mb-12">

        {/* 프로젝트 내용 섹션 */}
        <section className="project-detail-section">
          {/* 프로젝트 제목 */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.name}</h1>
            {project.type && (
              <h4 className="text-lg font-medium text-primary-600 mb-4">{project.type}</h4>
            )}
          </div>

          {/* 메인 이미지 */}
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

          {/* 2단 레이아웃 */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* 왼쪽: 프로젝트 정보 + 상세 설명 */}
            <div className="flex flex-col w-full md:w-1/2 space-y-8">
              <div className="text-gray-700 space-y-3 text-base leading-relaxed">
                <p>
                  <strong className="font-semibold text-gray-800">요약:</strong>{' '}
                  {project.summary || <span className="italic text-gray-400">정보 없음</span>}
                </p>
                <p>
                  <strong className="font-semibold text-gray-800">활동 기간:</strong>{' '}
                  {startedAtFormatted} ~ {endedAtFormatted}
                </p>
                <p>
                  <strong className="font-semibold text-gray-800">팀 구성:</strong>{' '}
                  {project.consistOf || <span className="italic text-gray-400">정보 없음</span>}
                </p>
                <p>
                  <strong className="font-semibold text-gray-800">나의 담당:</strong>{' '}
                  {project.job || <span className="italic text-gray-400">정보 없음</span>}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                  상세 설명
                </h3>
                <p className="whitespace-pre-line text-gray-800 leading-relaxed">
                  {project.detail || (
                    <span className="italic text-gray-400">
                      이 프로젝트에 대한 상세 설명이 곧 추가될 예정입니다.
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* 오른쪽: 주요 기능 + 관련 링크 */}
            <div className="flex flex-col w-full md:w-1/2 space-y-8">
              {features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                    주요 기능
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.projectLinkResponseDtos?.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                    관련 링크
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.projectLinkResponseDtos.map(link => (
                      <li key={link.projectLinkNo}>
                        <strong className="text-gray-800">{link.title}:</strong>{' '}
                        {link.statusContent === '중단' || link.statusContent === '비공개중' ? (
                          <span className="text-gray-500">{link.link}</span>
                        ) : (
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.link}
                          </a>
                        )}{' '}
                        <span className="text-gray-500 text-sm">({link.statusContent})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="tech-stack-section tech-stack mt-12">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories?.length > 0 ? (
              techCategories.map(({ techCategoryName }) => {
                const techsInCategory =
                  project.projectTechResponseDtos?.filter(
                    (t) => t.techCategoryName === techCategoryName
                  ) || [];

                return (
                  <div
                    key={techCategoryName}
                    className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
                  >
                    <h3 className="text-md font-semibold text-primary-700 mb-4">
                      {techCategoryName}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {techsInCategory.length > 0 ? (
                        techsInCategory.map(({ techName, techNo }) => {
                          const Icon = techIcons[techName];
                          const color = brandColors[techName] || '#6B7280';
                          return (
                            <div
                              key={techNo}
                              className="flex items-center gap-1 px-3 py-1 rounded-full select-none cursor-default"
                              style={{
                                backgroundColor: `${color}20`,
                                color: color,
                                border: `1px solid ${color}`,
                                userSelect: 'none',
                              }}
                            >
                              {Icon && <Icon size={16} />}
                              <span className="text-sm font-medium">{techName}</span>
                            </div>
                          );
                        })
                      ) : (
                        <span className="text-gray-400 italic">
                          카테고리에 해당하는 기술이 없습니다.
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500">기술 카테고리를 불러오지 못했습니다.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default PrintProjectDetail;