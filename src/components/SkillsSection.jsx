import React from 'react';
import { categorizedSkills, techIcons } from '../data/skillsData';

const SkillsSection = () => {
  return (
    <>
      <section className="bg-white py-8 px-6">
        <h2 className="text-3xl font-bold mb-11 text-gray-900 text-center">기술 스택</h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div
              key={category}
              className="flex flex-col items-center bg-gray-50 rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-4 border-b-2 border-primary-500 pb-2 w-full text-center">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-4 justify-center">
                {skills.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <div
                      key={tech}
                      className="flex items-center justify-start gap-2 px-3 py-2 rounded-lg bg-white shadow-sm border hover:border-primary-400 transition min-w-max"
                    >
                      {Icon && <Icon size={20} className="text-primary-600 flex-shrink-0" />}
                      <span className="text-gray-800 font-medium whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;