import React from 'react';

const HeroSection = () => {
  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .hero-section {
              background: #059669 !important;
              color: white !important;
            }
          }
        `}
      </style>

      <section className="hero-section bg-gradient-to-br from-emerald-600 to-green-700 text-white h-[95vh] px-6 text-center flex flex-col items-center justify-center">
        {/* 포트폴리오 제목 */}
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">PORTFOLIO</h1>

        {/* 구분선 */}
        <div className="w-24 h-1 bg-white mb-6"></div>

        {/* 이름 및 직무 */}
        <h2 className="text-3xl font-semibold mb-2">송현준</h2>
        <p className="text-xl mb-6">주니어 백엔드 & 풀스택 개발자</p>

        {/* 짧은 소개 */}
        <p className="text-lg mx-auto leading-relaxed max-w-xl">
          최신 기술과 클린 코드에 열정을 가지고, 효율적이고 확장 가능한 웹 서비스를 구축하는 개발자입니다.<br />
          언제나 새로운 도전을 즐기며, 팀과 함께 성장하는 것을 목표로 합니다.
        </p>
      </section>
    </>
  );
};

export default HeroSection;