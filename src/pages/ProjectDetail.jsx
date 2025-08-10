import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProject } from '../api/projectApi';
import { fetchTechCategories } from '../api/techCategoryApi';
import { techIcons, brandColors } from '../utils/techIcons';
import GlobalLoading from '../components/GlobalLoading';

const ProjectDetail = () => {
  const { no } = useParams();

  const {
    data: project,
    isError: projectIsError,
    isLoading: projectIsLoading,
  } = useQuery({
    queryKey: ['project', no],
    queryFn: () => fetchProject(no),
  });

  const {
    data: techCategories,
    isError: techCatIsError,
    isLoading: techCatIsLoading,
  } = useQuery({
    queryKey: ['techCategories'],
    queryFn: fetchTechCategories,
  });

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (project) {
      setMainImage(
        project.image || (project.images && project.images.length > 0 ? project.images[0] : null)
      );
    }
  }, [project]);

  if (projectIsError || techCatIsError) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600">
        데이터 불러오는 데 실패했습니다.
      </div>
    );
  }

  if (projectIsLoading || techCatIsLoading) {
    return <GlobalLoading />;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  const features = project.feature ? project.feature.split(',').map(f => f.trim()) : [];
  const startedAtFormatted = project.startedAt
    ? new Date(project.startedAt).toLocaleDateString()
    : '정보 없음';
  const endedAtFormatted = project.endedAt ? new Date(project.endedAt).toLocaleDateString() : '현재';

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
            .tech-stack > h2 {
              display: none !important;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-primary-50 py-12 px-6 print-container">
        <div className="max-w-[90%] mx-auto bg-white p-8 rounded-lg shadow-md content-wrapper">
          <div className="grid grid-cols-[3fr_1fr] gap-10 print-sections">
            <section className="project-content">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.name}</h1>
                {project.type && (
                  <h4 className="text-lg font-medium text-primary-600 mb-4">{project.type}</h4>
                )}
              </div>

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

              {(project.image || (project.images && project.images.length > 0)) && (
                <div className="mb-6 flex gap-3 overflow-x-auto thumbnail-list no-print">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.name} 이미지 대표`}
                      className={`w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${
                        mainImage === project.image ? 'border-primary-600' : 'border-transparent'
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
                          mainImage === imgSrc ? 'border-primary-600' : 'border-transparent'
                        }`}
                        onClick={() => setMainImage(imgSrc)}
                      />
                    ))}
                </div>
              )}

              <div className="project-info space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary-500 pb-2 mb-6">
                  프로젝트 정보
                </h2>

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
                    {project.detail || <span className="italic text-gray-400">이 프로젝트에 대한 상세 설명이 곧 추가될 예정입니다.</span>}
                  </p>
                </div>

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
                        <li key={link.projectLinkNo} className="truncate max-w-[80vw]">
                          <strong className="text-gray-800">{link.title}:</strong>{' '}
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 hover:underline"
                            title={link.link}
                          >
                            {link.link}
                          </a>{' '}
                          <span className="text-gray-500 text-sm">({link.statusContent})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            <section className="tech-stack">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">
                기술 스택
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {techCategories?.length > 0 ? (
                  techCategories.map(({ techCategoryName }) => {
                    const techsInCategory =
                      project.projectTechResponseDtos?.filter(
                        (t) => t.techCategoryName === techCategoryName
                      ) || [];

                    return (
                      <div
                        key={techCategoryName}
                        className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <h3 className="text-md font-semibold text-primary-700 mb-4">{techCategoryName}</h3>
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
                            <span className="text-gray-400 italic">카테고리에 해당하는 기술이 없습니다.</span>
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

          <div className="mt-8 no-print">
            <Link to="/project" className="text-primary-600 hover:text-primary-700 hover:underline">
              ← 프로젝트 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;