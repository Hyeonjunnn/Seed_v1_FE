import React from 'react';

const AboutMe = () => {
  return (
    <section className="min-h-screen max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 text-center tracking-wide drop-shadow-sm">
        소개
      </h2>
      <div className="space-y-8 text-gray-800 leading-relaxed text-lg">
        <p>
          저는{' '}
          <strong className="text-green-700">
            안정적이고 확장성 있는 백엔드 서비스
          </strong>{' '}
          를 구축하는 개발자입니다. 전자정부프레임워크 기반의 ERP 시스템을{' '}
          <strong className="text-green-700">Spring Boot로 웹 전환</strong>하고, 기존 시스템의 성능 개선 및 더존 ERP 연동을 구현한 경험이 있습니다.
        </p>
        <p>
          프론트엔드에서는{' '}
          <strong className="text-green-700">React와 Vue.js</strong>를 활용해 사용자 친화적인 UI를 개발하고,{' '}
          <strong className="text-green-700">Redis, Mariadb, PostgreSQL</strong>을 활용한 데이터 관리와 성능 최적화에도 집중해왔습니다.
        </p>
        <p>
          또한,{' '}
          <strong className="text-green-700">Kubernetes, ArgoCD, Jenkins, AWS</strong>를 활용해 CI/CD 파이프라인을 설계하고 자동화된 배포 환경을 구축했으며, Python 기반 데이터 분석과{' '}
          <strong className="text-green-700">생성형 AI를 활용한 프로젝트</strong>도 진행 중입니다.
        </p>
        <p>
          최신 기술을 빠르게 습득하고 프로젝트에 적용하며,{' '}
          <strong className="text-green-700">지속적인 개선과 성능 최적화</strong>를 통해 사용자와 팀에 가치를 제공하는 것을 목표로 하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;