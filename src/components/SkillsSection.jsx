import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTechCategories } from '../api/techCategoryApi';
import { fetchTechs } from '../api/techApi';
import { techIcons } from '../utils/techIcons';

const SkillsSection = () => {
  const { data: techCategories } = useQuery({
    queryKey: ['techCategories'],
    queryFn: fetchTechCategories,
  });

  const { data: techs } = useQuery({
    queryKey: ['techs'],
    queryFn: fetchTechs,
  });

  if (!techCategories || !techs) return null;

  const categorizedSkills = {};
  techCategories.forEach(({ techCategoryName }) => {
    categorizedSkills[techCategoryName] = [];
  });
  techs.forEach(({ techName, techCategoryName }) => {
    if (categorizedSkills[techCategoryName]) {
      categorizedSkills[techCategoryName].push(techName);
    } else {
      categorizedSkills[techCategoryName] = [techName];
    }
  });

  return (
    <section className="min-h-screen bg-white py-10 px-6">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center tracking-wide drop-shadow-sm">
        기술 스택
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.keys(categorizedSkills).map((category) => {
          const skills = categorizedSkills[category] || [];
          return (
            <div
              key={category}
              className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md border border-gray-300 p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-extrabold text-green-800 mb-6 border-b-4 border-green-600 pb-3 w-full text-center">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-green-500 transition min-w-max cursor-default select-none"
                    >
                      {Icon && <Icon size={22} className="text-green-700 flex-shrink-0" />}
                      <span className="text-green-800 font-semibold whitespace-nowrap">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;