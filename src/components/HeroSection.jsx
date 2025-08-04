import React from 'react';

const HeroSection = () => {
  return (
    <>
      <style>
        {`
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .hero-section {
              background: #059669 !important; /* 인쇄 시 초록색 고정 (emerald-600) */
              color: white !important;
            }
          }
        `}
      </style>

      <section className="hero-section bg-gradient-to-br from-emerald-600 to-green-700 text-white py-32 px-6 text-center flex flex-col items-center justify-center">
        {/* 포트폴리오 제목 */}
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">PORTFOLIO</h1>

        {/* 구분선 */}
        <div className="w-24 h-1 bg-white mb-6"></div>

        {/* 이름 및 직무 */}
        <h2 className="text-3xl font-semibold mb-2">송현준</h2>
        <p className="text-xl mb-6">주니어 백엔드 & 풀스택 개발자</p>

        {/* 짧은 소개 */}
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          최신 기술과 클린 코드에 열정을 가지고, 효율적이고 확장 가능한 웹 서비스를 구축하는 개발자입니다.
        </p>
      </section>
    </>
  );
};

export default HeroSection;