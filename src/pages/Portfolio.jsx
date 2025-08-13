import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import ProfileSection from '../components/ProfileSection';
import CertificationsSection from '../components/CertificationsSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Portfolio = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-primary-50 min-h-screen relative">
      {/* 인쇄 버튼 */}
      <button
        onClick={handlePrint}
        className="
          fixed top-20 right-6 z-50 
          bg-white bg-opacity-90 
          text-primary-700 
          px-5 py-2.5 rounded-full 
          shadow-lg border border-primary-600
          flex items-center gap-2
          text-lg font-semibold
          hover:bg-primary-600 hover:text-white
          transition-colors duration-300
          print:hidden
          select-none
          cursor-pointer
          backdrop-blur-sm
        "
        title="인쇄하기"
        aria-label="인쇄 버튼"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9v6m6 3v-6m3 0h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3m-6 6h6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18H4a2 2 0 01-2-2v-3a2 2 0 012-2h2m6-3v-3a2 2 0 012-2h4a2 2 0 012 2v3"
          />
        </svg>
        인쇄
      </button>

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