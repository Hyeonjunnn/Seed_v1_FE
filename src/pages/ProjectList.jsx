import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../api/projectApi';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const size = 9; // 컨트롤러 기본값과 맞춤

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects(page, size);
        setProjects(data.content || []); // Spring Data Page 객체에서 content에 리스트 있음
      } catch (err) {
        setError('프로젝트를 불러오는 데 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [page]);

  if (loading) return <div className="min-h-screen flex justify-center items-center">로딩 중...</div>;
  if (error) return <div className="min-h-screen flex justify-center items-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">프로젝트</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.projectNo - a.projectNo)
          .map((project) => (
            <ProjectCard key={project.projectNo} project={project} />
          ))}
      </div>

      {/* 간단 페이징 UI (예시) */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-gray-300"
        >
          이전
        </button>
        <span className="flex items-center text-gray-700 font-semibold">Page {page + 1}</span>
        <button
          // 다음 페이지 버튼 활성화 여부는 totalPages 정보가 있어야 하므로 생략 가능
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default ProjectList;