import React from 'react';
import { techIcons, brandColors } from '../data/techIcons';

const TechStackIcons = ({ stack, limit, showLabel = false, size = 24 }) => {
  const limitedStack = limit ? stack.slice(0, limit) : stack;

  return (
    <div className="flex gap-2 flex-wrap">
      {limitedStack.map((tech) => {
        const Icon = techIcons[tech];
        return Icon ? (
          <div key={tech} className="flex items-center gap-1">
            <Icon size={size} color={brandColors[tech]} />
            {showLabel && <span className="text-sm text-gray-700">{tech}</span>}
          </div>
        ) : (
          <span key={tech}>{tech}</span>
        );
      })}
    </div>
  );
};

export default TechStackIcons;