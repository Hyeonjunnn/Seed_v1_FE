export const projects = [
    {
        no: 1,
        name: 'ERP 시스템 웹 전환',
        type: '경력',
        description: '전자정부프레임워크 기반 ERP를 Spring Boot로 전환',
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'AWS'],
        details: '기존 PowerBuilder ERP 시스템을 웹으로 전환, 더존 ERP 연동 기능 구현.'
    },
    {
        no: 2,
        name: '프로젝트 관리 플랫폼',
        type: '팀 프로젝트',
        description: 'React + Spring Boot + PostgreSQL 기반의 프로젝트 관리 웹 앱',
        githubLinks: [
            { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/Seed_v1_FE' },
            { name: 'Backend', url: 'https://github.com/Hyeonjunnn/Seed_v1_BE' },
        ],
        demo: 'https://project-demo.com',
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'AWS'],
        details: '프로젝트 관리 기능, 팀 협업, 태스크 관리, 일정 관리 기능을 포함.'
    },
    {
        no: 3,
        name: 'B2B 구독 관리 시스템',
        type: '팀 프로젝트',
        description: 'OTT 기업을 위한 구독 분석 및 이탈 예측 시스템',
        githubLinks: [
            { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/Seed_v1_FE' },
            { name: 'Backend', url: 'https://github.com/Hyeonjunnn/Seed_v1_BE' },
            { name: 'Python Service', url: 'https://github.com/username/seed-python' }
        ],
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'AWS'],
        details: '이 시스템은 OTT 기업의 구독 데이터를 분석하여 이탈 예측 및 맞춤형 마케팅 전략을 제공합니다. 데이터 시각화 및 리포트 기능 포함.'
    },
    {
        no: 4,
        name: 'Seed 프로젝트',
        type: '개인 프로젝트',
        description: 'React + Spring Boot 기반 프로젝트 관리 플랫폼',
        githubLinks: [
            { name: 'Frontend', url: 'https://github.com/Hyeonjunnn/Seed_v1_FE' },
            { name: 'Backend', url: 'https://github.com/Hyeonjunnn/Seed_v1_BE' },
        ],
        demo: 'https://seed-v1.vercel.app',
        techStack: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
        details: '이 프로젝트는 프로젝트 모집 및 관리 기능을 제공하는 웹 애플리케이션입니다.'
    }
];