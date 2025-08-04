import React from 'react';
import { categorizedSkills, techIcons } from '../data/skillsData';

const Home = () => {
  const allSkills = Array.from(new Set(Object.values(categorizedSkills).flat()));

  const repeatedSkills = [...allSkills, ...allSkills];

  return (
    <div className="min-h-screen bg-primary-50 text-gray-800">
      {/* 헤더 인사 */}
      <header className="bg-primary-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">저의 사이트에 방문해주셔서 감사합니다!</h1>
        <p className="text-lg max-w-xl mx-auto">
          송현준의 포트폴리오 사이트에 오신 것을 환영합니다.<br />
          여기서 저의 경험과 프로젝트를 확인하실 수 있습니다.
        </p>
      </header>

      {/* 자기소개 섹션 */}
      {/* <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-primary-700">안녕하세요, 저는 송현준입니다.</h2>
        <p className="text-lg leading-relaxed">
          저는 웹 개발자이며, 백엔드와 프론트엔드를 넘나들며<br />
          효율적이고 유지보수하기 좋은 코드를 작성하는 것을 목표로 합니다.<br />
          Java, Spring Boot, React를 주로 사용하고 있으며,<br />
          팀 협업과 클린 코드에 가치를 두고 있습니다.
        </p>
      </section> */}

      {/* 기술 스택 - 슬라이드 효과 + 아이콘 */}
      <section className="bg-primary-100 py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-primary-700 text-center">기술 스택</h2>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex whitespace-nowrap"
              style={{
                animation: 'slideLeft 20s linear infinite',
              }}
            >
              {repeatedSkills.map((tech, idx) => {
                const Icon = techIcons[tech];
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center px-5 py-3 bg-white rounded-full shadow text-primary-700 font-medium mr-6 select-none"
                    style={{ gap: 6 }}
                  >
                    {Icon && <Icon size={20} className="text-primary-700" />}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 연락 섹션 */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-primary-700">함께 이야기해요</h2>
        <p className="mb-8 text-lg">
          궁금한 점이나 협업 문의는 언제든 연락 주세요.
        </p>
        <a
          href="mailto:dev_sklg0602@naver.com"
          className="inline-block bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition"
        >
          이메일 보내기
        </a>
      </section>

      {/* 슬라이드 애니메이션 keyframes 인라인 스타일 */}
      <style>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;