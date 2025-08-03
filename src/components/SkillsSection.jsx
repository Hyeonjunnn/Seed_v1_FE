import React from 'react';
import { categorizedSkills, techIcons } from '../data/skillsData';

const SkillsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">기술 스택</h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-center">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-primary-700 mb-4">{category}</h3>
            <div className="flex flex-col items-center gap-3">
              {skills.map((tech) => {
                const Icon = techIcons[tech];
                return (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 shadow-sm transition"
                  >
                    {Icon && <Icon size={20} className="text-primary-600" />}
                    <span className="text-gray-800 font-medium">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;