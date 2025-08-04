import React from 'react';

const ProfileSection = () => {
  const basicInfo = [
    { label: '이름', value: '송현준' },
    { label: '생년월일', value: '2000.06.02' },
    { label: '이메일', value: 'dev_sklg0602@naver.com' },
    { label: '전화번호', value: '010-2044-7585' },
    { label: '주소', value: '서울특별시 마포구' },
  ];

  const education = [
    {
      school: '경성대학교',
      major: '(본전공)정보통신공학과  / (복수전공)컴퓨터공학과 ',
      period: '2019.03 ~ 2024.02',
      degree: '학사 졸업',
      gpa: '3.7 / 4.5',
    },
  ];

  const trainings = [
    {
      title: '한화시스템 Beyond SW 캠프',
      period: '2024.12 ~ 2025.06(960시간)',
      institution: '플레이데이터평생교육원',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-gray-700 text-center">
          인적 사항 & 학력
        </h2>

        {/* 기본 인적 정보 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">기본 정보</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {basicInfo.map((info, idx) => (
              <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                <span className="font-semibold text-primary-700">{info.label}: </span>
                <span className="text-gray-700">{info.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 학력 사항 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">학력 사항</h3>
          <ul className="space-y-4">
            {education.map((edu, idx) => (
              <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                <p className="font-semibold text-primary-700">{edu.school}</p>
                <p className="text-gray-700">{edu.major} ({edu.degree})</p>
                <p className="text-gray-700">학점: {edu.gpa}</p>
                <p className="text-gray-500">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 교육 사항 */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">교육 사항</h3>
          <ul className="space-y-4">
            {trainings.map((training, idx) => (
              <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                <p className="font-semibold text-primary-700">{training.title}</p>
                <p className="text-gray-700">{training.institution}</p>
                <p className="text-gray-500">{training.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;