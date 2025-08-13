import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '../api/projectApi';
import { fetchTechCategories } from '../api/techCategoryApi';
import ProjectCard from './ProjectCard';
import GlobalLoading from './GlobalLoading';
import PrintProjectDetail from './PrintProjectDetail';

const ProjectsSection = ({ size = 9, backgroundColor = 'bg-primary-50' }) => {
  const {
    data: projectsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['projects', size],
    queryFn: () => fetchProjects(0, size),
  });

  const {
    data: techCategories,
    isLoading: techCatLoading,
    isError: techCatError,
  } = useQuery({
    queryKey: ['techCategories'],
    queryFn: fetchTechCategories,
  });

  if (isLoading || techCatLoading) return <GlobalLoading />;

  if (isError || techCatError)
    return (
      <div className="flex justify-center items-center text-red-600 min-h-[300px]">
        프로젝트를 불러오는 데 실패했습니다.
      </div>
    );

  const projects = Array.isArray(projectsData?.content) ? projectsData.content : [];
  const sortedProjects = projects.sort((a, b) => b.projectNo - a.projectNo);

  return (
    <>
      {/* 일반 프로젝트 리스트 */}
      <section
        className={`${backgroundColor} min-h-[600px] py-8 px-4 overflow-x-hidden`}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center tracking-wide drop-shadow-sm">
          프로젝트
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map(project => (
            <ProjectCard key={project.projectNo} project={project} />
          ))}
        </div>
      </section>

      {/* 인쇄용 상세보기 (복사한 ProjectDetail 디자인 그대로) - 평소엔 숨김, 인쇄 시 보임 */}
      <div className="print:block hidden">
        {sortedProjects.map(project => (
          <PrintProjectDetail
            key={project.projectNo}
            project={project}
            techCategories={techCategories}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;