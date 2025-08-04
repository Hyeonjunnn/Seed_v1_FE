import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import ProfileSection from '../components/ProfileSection';
import CertificationsSection from '../components/CertificationsSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Portfolio = () => {
  return (
  <div className="bg-primary-50 min-h-screen">
    <section className="print-section"><HeroSection /></section>
    <section className="print-section"><AboutMe /></section>
    <section className="print-section"><ProfileSection /></section>
    <section className="print-section"><CertificationsSection /></section>
    <section className="print-section"><SkillsSection /></section>
    <section className="print-section"><ProjectsSection /></section>
    <section className="print-section"><ContactSection /></section>
  </div>
  );
};

export default Portfolio;