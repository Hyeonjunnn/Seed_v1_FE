import React from 'react';

const AboutMe = () => {
  return (
    <section className="min-h-screen max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold mb-16 text-gray-900 text-center tracking-wide drop-shadow-sm">
        소개
      </h2>
      <div className="space-y-8 text-gray-800 leading-relaxed text-lg">
        <p>
          저는 백엔드 개발과 프론트엔드, 인프라 구축 전반에 걸친 폭넓은 기술 스택을 보유한 신입 개발자입니다. 
          <strong className="text-green-700">
            Java와 Spring 생태계(Spring MVC, Spring Data JPA, Spring Security, Spring Cloud Config, Spring Netflix Eureka, Spring Actuator)
          </strong>를 활용한 API 개발과 
          <strong className="text-green-700"> MyBatis·MS-SQL 기반 데이터베이스 연동</strong>에 능숙하며, 
          JSP, React, Vue.js 등 다양한 프론트엔드 기술을 활용한 웹 개발 경험도 갖추고 있습니다.
        </p>
        <p>
          또한 <strong className="text-green-700">Kubernetes, Docker, AWS EC2·RDS·S3</strong> 등을 활용해 서비스 배포와 운영 환경을 직접 설계·구축한 경험이 있습니다. 
          무중단 배포, Auto Scaling, Load Balancer 설정 등 서비스 안정성을 높이는 아키텍처 설계 역량과 홈서버 기반 컨테이너 환경 운영 경험을 통해 비용 효율성까지 고려할 수 있습니다.
        </p>
        <p>
          현재는 <strong className="text-green-700">Vercel을 이용한 React 배포, Render를 통한 Spring Boot 배포와 PostgreSQL 연동, RedisLabs 기반 Redis 클라우드 환경</strong>을 구성하여 개인 웹 서비스를 개발·운영하고 있습니다.
        </p>
        <p>
          이러한 기술적 폭과 통합적 시각은 단순 구현을 넘어 안정적이고 확장 가능한 서비스를 만드는 데 강점이 됩니다. 앞으로도 최신 기술 학습과 실무 적용을 병행하며, 기업의 성장과 함께 발전하는 개발자가 되겠습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;