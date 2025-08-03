import React from 'react';
import { techIcons } from '../utils/techIcons';

const skills = [
  'React',
  'Spring',
  'Spring Boot',
  'Java',
  'Python',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'AWS',
];

const SkillsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">기술 스택</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
        {skills.map((tech) => {
          const Icon = techIcons[tech];
          return (
            <div
              key={tech}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-indigo-50 rounded-lg w-28 h-28 text-center"
            >
              {Icon && <Icon size={36} className="text-indigo-600" />}
              <span className="text-indigo-700 font-semibold break-words">{tech}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
