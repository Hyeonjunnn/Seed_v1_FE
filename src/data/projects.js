export const projects = [
    {
      no: 1,
      name: 'ERP 시스템 웹 전환',
      type: '경력',
      period: '2023.07 ~ 2024.07(중 9개월)',
      team: '개발자 3명',
      role: '백엔드 개발 및 유지보수, ERP 기능 분석 및 웹 전환',
      description: '전자정부프레임워크 기반 ERP를 Spring Boot로 전환',
      techCategories: {
        Frontend: ['JSP', 'JavaScript'],
        Backend: ['eGovFrame', 'Spring', 'Java'],
        Database: ['MS-SQL'],
        'CI/CD': [],
        Communication: ['GitLab']
      },
      details: '기존 PowerBuilder ERP 시스템을 웹으로 전환, 더존 ERP 연동 기능 구현.'
    },
    {
      no: 2,
      name: '개발자 프로젝트 관리 플랫폼',
      type: '팀 프로젝트',
      period: '2025.03 ~ 2024.04',
      team: '프론트엔드 1명, 백엔드 3명, DevOps 1명',
      role: '프론트엔드 개발, 백엔드 API 개발, DB 설계 및 구축',
      description: 'Vue.js + Spring Boot 기반의 개발자 프로젝트 관리 플랫폼',
      githubLinks: [
        { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/be13-3rd-4team' },
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/be13-2nd-4team' }
      ],
      link: 'https://project1.netforum.co.kr (현재 서비스 중단)',
      techCategories: {
        Frontend: ['Vuejs', 'JavaScript'],
        Backend: ['Spring Boot', 'Java'],
        Database: ['Mariadb', 'Redis'],
        'CI/CD': ['Jenkins', 'Docker'],
        Communication: ['Github', 'Discord']
      },
      details: '개발자 프로젝트 구인구직, 프로젝트 관리 기능, 팀 협업, 태스크 관리, 일정 관리 기능 포함.'
    },
    {
      no: 3,
      name: '사내 익명 게시판',
      type: '팀 프로젝트',
      period: '2025.04 ~ 2024.04',
      team: '프론트엔드 1명, 백엔드 2명, DevOps 2명',
      role: '백엔드 API 개발, Kubernetes & ArgoCD 배포',
      description: 'Spring Boot 기반의 사내 익명 게시판 시스템',
      githubLinks: [
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/be13-EchoesOfAesop-AesopWow' }
      ],
      link: 'http://43.202.78.185:8010 (현재 서비스 중단)',
      techCategories: {
        Frontend: [],
        Backend: ['Spring Boot', 'Java'],
        Database: ['Mariadb', 'Redis'],
        'CI/CD': ['Jenkins', 'Docker', 'Kubernetes', 'Argo'],
        Communication: ['Github', 'Notion', 'Discord']
      },
      details: '사내 소통을 위한 익명 게시판 기능 구현, CI/CD 자동화 및 컨테이너 기반 배포.'
    },
    {
      no: 4,
      name: 'B2B 구독 관리 시스템',
      type: '팀 프로젝트',
      period: '2024.04 ~ 2024.06',
      team: '프론트엔드 2명, 백엔드 2명, DevOps 1명, 데이터 분석 1명',
      role: '백엔드 API 개발, AWS 배포, 데이터 코호트 분석 기법 파이썬 구현',
      description: 'OTT 기업을 위한 OpenAI 활용 구독 분석 및 이탈 예측 시스템',
      githubLinks: [
        { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/be13-fin-aesopwow-subsub_clipclop-FE' },
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/be13-fin-aesopwow-subsub_clipclop-BE' },
        { name: 'Python Service', url: 'https://github.com/Hyeonjunnn/be13-fin-aesopwow-subsub_clipclop-ML' }
      ],
      link: 'https://dagudok-service.com (현재 서비스 중단)',
      techCategories: {
        Frontend: ['React', 'Tailwind CSS'],
        Backend: ['Spring Boot', 'Java', 'Flask', 'Python'],
        Database: ['Mariadb', 'Redis'],
        'CI/CD': ['GithubActions', 'Docker'],
        Communication: ['Github', 'Notion', 'Figma', 'Discord']
      },
      details: 'OTT 구독 데이터 분석, 이탈 예측, 시각화 및 리포트 기능 제공.'
    },
    {
      no: 5,
      name: '생성형 LLM 기반 AI 여행 일정 추천 서비스',
      type: '팀 프로젝트(공모전)',
      period: '2025.06 ~ 진행 중',
      team: '프론트엔드 2명, 백엔드 2명, AI 1명',
      role: '백엔드 API 개발, K-PaaS CI/CD 클라우드 배포',
      description: '사용자가 입력한 여행 정보를 바탕으로 AI가 추천하는 여행 일정 서비스',
      githubLinks: [
        { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/Hanbando-FE' },
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/Hanbando-BE' }
      ],
      techCategories: {
        Frontend: ['React', 'Tailwind CSS'],
        Backend: ['Spring Boot', 'Java', 'Flask', 'Python'],
        Database: ['Mariadb', 'Redis'],
        'CI/CD': ['K-PaaS(NHN Cloud:nks)', 'GithubActions', 'Docker'],
        Communication: ['Github', 'Notion', 'Figma', 'Discord']
      },
      details: 'AI 기반 국내 여행 일정 추천 서비스, LLM 활용 일정 생성 기능 구현.'
    },
    {
      no: 6,
      name: 'Seed 프로젝트',
      type: '개인 프로젝트',
      period: '2025.07.30 ~ 진행 중',
      team: '1명 (개인 프로젝트)',
      role: '전체 개발 및 배포',
      description: 'React + Spring Boot 개인 포트폴리오 웹 애플리케이션',
      githubLinks: [
        { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/Seed_v1_FE' },
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/Seed_v1_BE' }
      ],
      link: 'https://seed-v1.vercel.app',
      techCategories: {
        Frontend: ['Vercel', 'React', 'Tailwind CSS'],
        Backend: ['Render', 'Spring Boot', 'Java'],
        Database: ['PostgreSQL', 'Redis'],
        'CI/CD': ['Docker'],
        Communication: ['Github']
      },
      details: '개인 포트폴리오 웹 애플리케이션으로, 기술 스택, 프로젝트, 경력 등을 소개합니다.'
    }
  ];
  