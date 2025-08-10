import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../api/projectApi';
import GlobalLoading from '../components/GlobalLoading';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const size = 9;

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setError(null);
        const data = await fetchProjects(0, size);
        setProjects(data.content || []);
      } catch (err) {
        setError('프로젝트를 불러오는 데 실패했습니다.');
        console.error(err);
      }
    };

    loadProjects();
  }, []);

  if (error) return <div className="min-h-screen flex justify-center items-center text-red-600">{error}</div>;

  return (
    <>
      <GlobalLoading />

      <div className="min-h-screen bg-primary-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">프로젝트</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .sort((a, b) => b.projectNo - a.projectNo)
            .map((project) => (
              <ProjectCard key={project.projectNo} project={project} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;