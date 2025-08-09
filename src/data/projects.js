export const projects = [
    {
    no: 1,
    name: 'ERP 시스템 웹 전환',
    type: '경력',
    period: '2023.07 ~ 2024.07(중 9개월)',
    team: 'WorkStudio팀(팀장 1명, 프론트엔드 1명, 백엔드 4명)',
    role: '백엔드 개발 및 유지보수, ERP 기능 분석 및 웹 전환',
    description: '전자정부프레임워크 기반 ERP를 Spring Boot로 전환',
    details: '전자정부프레임워크 기반으로 기업 웹 ERP 백엔드 개발과 유지보수를 담당하며 오류 추적 및 개선을 수행했습니다. 기존 파워빌더 ERP를 웹으로 전환하고 더존 ERP 연동을 구현했으며, 사내 개발 표준화를 위한 개발환경 매뉴얼을 작성했습니다.',
    features: [
        '기존 PowerBuilder ERP 시스템 기능 분석 및 웹 전환',
        '전자정부프레임워크 기반 구조 분석 및 개선',
        '더존 ERP 연동 기능 구현',
        'DB 연계 및 MS-SQL 기반 데이터 처리',
        '운영 중 오류 수정 및 성능 최적화'
    ],
    techCategories: {
        Frontend: ['JSP', 'JavaScript', 'Jquery'],
        Backend: ['eGovFrame', 'Spring', 'Java'],
        Database: ['MS-SQL'],
        'CI/CD': ['GitLab'],
        Communication: []
    }
    },
    {
    no: 2,
    name: '개발자 프로젝트 관리 플랫폼',
    type: '팀 프로젝트',
    period: '2025.03 ~ 2025.04',
    team: '프론트엔드 1명, 백엔드 3명, DevOps 1명',
    role: '프론트엔드 개발, 백엔드 API 개발, DB 설계 및 구축',
    description: 'Vue.js + Spring Boot 기반의 개발자 프로젝트 관리 플랫폼',
    details: '개발자들이 자신과 잘 맞는 팀원을 찾고, 함께 프로젝트를 진행할 수 있도록 도와주는 개발자 매칭 서비스입니다. 본 서비스는 단순한 구인구직 플랫폼을 넘어, 개발자들의 기술적 역량뿐만 아니라 작업 스타일, 커뮤니케이션 방식, 프로젝트 관리 성향 등을 종합적으로 고려한 매칭 시스템을 제공합니다.',
    features: [
        '프로젝트 구인/구직 기능',
        '프로젝트 일정 및 태스크 관리',
        '팀원 초대 및 협업 기능',
        'Redis를 이용한 세션 관리',
        'Jenkins + Docker 기반 CI/CD 파이프라인 구축'
    ],
    githubLinks: [
        { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/be13-3rd-4team' },
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/be13-2nd-4team' }
    ],
    link: 'https://project1.netforum.co.kr (현재 서비스 중단)',
    techCategories: {
        Frontend: ['Vuejs', 'JavaScript'],
        Backend: ['Spring Boot', 'Java'],
        Database: ['Mariadb', 'Redis'],
        'CI/CD': ['Jenkins', 'Docker', 'Github'],
        Communication: ['Discord']
    },
    image: '/images/moyobom-architecture.png',
        images: [
            '/images/moyobom-board.png',
            '/images/moyobom-message.png',
            '/images/moyobom-team.png',
            '/images/moyobom-schedule.png',
        ],
    },
    {
    no: 3,
    name: '사내 익명 게시판',
    type: '팀 프로젝트',
    period: '2025.04 ~ 2025.04',
    team: '프론트엔드 1명, 백엔드 2명, DevOps 2명',
    role: '백엔드 API 개발, Kubernetes & ArgoCD 배포',
    description: 'Spring Boot 기반의 사내 익명 게시판 시스템',
    details: 'Kubernetes 기반으로 배포된 익명 게시판 시스템으로, JWT 인증을 통한 사용자 인증 및 권한 관리, Redis 캐싱을 통한 성능 최적화, Jenkins와 ArgoCD를 이용한 CI/CD 자동화 구현하였습니다.',
    features: [
        '익명 글쓰기 및 댓글 기능',
        'JWT 기반 인증 및 권한 관리, Redis 캐싱',
        'CI/CD 자동화 (Jenkins + ArgoCD)',
        'Kubernetes 기반 배포 및 Helm을 이용한 배포 관리',
        'Sonarqube를 이용한 코드 품질 관리'
    ],
    githubLinks: [
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/be13-EchoesOfAesop-AesopWow' }
    ],
    link: 'http://43.202.78.185:8010 (현재 서비스 중단)',
    techCategories: {
        Frontend: [],
        Backend: ['Spring Boot', 'Java'],
        Database: ['Mariadb', 'Redis'],
        'CI/CD': ['Jenkins', 'Docker', 'Kubernetes', 'Argo', 'Helm', 'Sonarqube', 'Github'],
        Communication: ['Notion', 'Discord']
    },
    image: '/images/aesopwow-k8s.png',
        images: [
        ],
    },
    {
    no: 4,
    name: 'B2B 구독 관리 시스템',
    type: '팀 프로젝트',
    period: '2025.04 ~ 2025.06',
    team: '프론트엔드 2명, 백엔드 2명, DevOps 1명, 데이터 분석 1명',
    role: '백엔드 API 개발, AWS 배포, 데이터 코호트 분석 기법 파이썬 구현',
    description: 'OTT 기업을 위한 OpenAI 활용 구독 분석 및 이탈 예측 시스템',
    details: '고객 데이터는 엑셀 또는 CSV 파일로 쉽게 업로드할 수 있으며, 구독 현황 분석을 통해 전체 구독자, 활성 상태, 이탈 현황을 직관적으로 확인할 수 있습니다. 코호트 분석을 통해 가입 시점별 장기 구독 유지율을 분석합니다. 더불어 머신러닝 기반 이탈 예측 기능으로 이탈 가능성이 높은 사용자를 식별하며, 구독 상품의 결제와 갱신 기능도 제공합니다.',
    features: [
        'OTT 구독 데이터 수집 및 분석, 시각화 대시보드 구현',
        'OpenAI 기반 사용자 이탈 예측 모델 적용',
        'Spring Boot + Flask 연동 구조 설계 및 AWS EC2 + Docker 기반 배포',
    ],
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
        'CI/CD': ['GithubActions', 'Docker', 'Github'],
        Communication: ['Notion', 'Figma', 'Discord']
    },
    image: '/images/dagudok-home.png',
        images: [
            '/images/dagudok-dashboard.png',
            '/images/dagudok-bill.png',
            '/images/dagudok-cohort.png'
        ],
    },
    {
    no: 5,
    name: '생성형 LLM 기반 AI 여행 일정 추천 서비스',
    type: '팀 프로젝트(공모전)',
    period: '2025.07 ~ 진행 중',
    team: '프론트엔드 2명, 백엔드 2명, AI 1명',
    role: '백엔드 API 개발, K-PaaS CI/CD 클라우드 배포',
    description: '사용자가 입력한 여행 정보를 바탕으로 AI가 추천하는 여행 일정 서비스',
    details: 'K-PaaS 개발 공모전을 수상을 목표로 진행중입니다. AI 기반 국내 여행 일정 추천과 LLM 활용 일정 생성 기능 서비스를 목표로 개발 중입니다. 사용자 입력 기반으로 AI가 추천하는 여행 일정을 제공하며, NHN K-PaaS 클라우드 환경에 배포되어 있습니다. 현재는 프론트엔드 40% 완료, 백엔드 API 개발 70% 완료, GitHub Actions로 CI/CD 설계 진행중입니다. 향후 AI 모델 개선 및 사용자 피드백 반영을 통해 지속적으로 발전시킬 예정입니다.',
    features: [
        '사용자 입력 기반 AI 일정 추천',
        'NHN K-PaaS 클라우드 환경 배포',
        'CI/CD 자동화 (GitHub Actions + Docker)'
    ],
    githubLinks: [
        { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/Hanbando-FE' },
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/Hanbando-BE' }
    ],
    techCategories: {
        Frontend: ['React', 'Tailwind CSS'],
        Backend: ['Spring Boot', 'Java', 'Flask', 'Python'],
        Database: ['Mariadb', 'Redis'],
        'CI/CD': ['K-PaaS(NHN Cloud:nks)', 'GithubActions', 'Docker', 'Github'],
        Communication: ['Notion', 'Figma', 'Discord']
    },
    image: '/images/hanbando-home.png',
        images: [
            '/images/hanbando-signup.png'
        ],
    },
    {
    no: 6,
    name: 'Seed 프로젝트',
    type: '개인 프로젝트',
    period: '2025.07.30 ~ 진행 중',
    team: '1명 (개인 프로젝트)',
    role: '전체 개발 및 배포',
    description: 'React + Spring Boot 개인 포트폴리오 웹 애플리케이션',
    details: '개인 포트폴리오 웹 애플리케이션으로, 기술 스택, 프로젝트, 경력 등을 소개합니다. Render와 Vercel을 이용한 배포 환경을 구성하였으며, Redis를 이용한 캐싱 처리로 성능을 개선하였습니다. 현재는 간단한 인증과 게시판을 구현한 상태이며, 최신 기술과 트렌드를 반영하여 지속적으로 업데이트 예정입니다.',
    features: [
        '버전 관리를 통한 꾸준한 업데이트 및 유지보수',
        'Vercel + Render 배포 환경 구성',
        'React + Tailwind 기반 프론트엔드 UI',
        'Spring Boot API 서버 구현',
        'Redis 적용 및 캐싱 처리',
    ],
    githubLinks: [
        { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/Seed_v1_FE' },
        { name: 'Backend', url: 'https://github.com/Hyeonjunnn/Seed_v1_BE' }
    ],
    link: 'https://seed-v1.vercel.app',
    techCategories: {
        Frontend: ['Vercel', 'React', 'Tailwind CSS'],
        Backend: ['Render', 'Spring Boot', 'Java'],
        Database: ['PostgreSQL', 'Redis'],
        'CI/CD': ['Docker', 'Github'],
        Communication: ['Notion']
    },
    image: '/images/seed-home.png',
        images: [
            '/images/seed-project.png',
            '/images/seed-portfolio.png',
            '/images/seed-board.png'
        ],
    }
];  