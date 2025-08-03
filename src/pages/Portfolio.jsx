import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import CertificationsSection from '../components/CertificationsSection';

// 예시로 props로 userRole 받음
const Portfolio = () => {
  return (
    <div className="bg-primary-50 min-h-screen">
      <HeroSection />
      <AboutMe />
      <CertificationsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;