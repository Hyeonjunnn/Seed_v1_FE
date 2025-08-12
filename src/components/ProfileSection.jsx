import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineUser, HiOutlineCalendar, HiOutlineClipboard } from 'react-icons/hi';
import useAlertStore from '../store/alertStore';

const ProfileSection = () => {
  const { showAlert } = useAlertStore();

  const basicInfo = [
    { label: '이름', value: '송현준', icon: <HiOutlineUser className="text-primary-600 w-5 h-5" /> },
    { label: '생년월일', value: '2000.06.02', icon: <HiOutlineCalendar className="text-primary-600 w-5 h-5" /> },
    { 
      label: '이메일', 
      value: 'dev_sklg0602@naver.com', 
      icon: <HiOutlineMail className="text-primary-600 w-5 h-5" />,
      isEmail: true
    },
    { label: '전화번호', value: '010-2044-7585', icon: <HiOutlinePhone className="text-primary-600 w-5 h-5" /> },
    { label: '주소', value: '서울특별시 마포구', icon: <HiOutlineLocationMarker className="text-primary-600 w-5 h-5" /> },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert('이메일이 복사되었습니다!', 'success');
    });
  };

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
    <section className="min-h-screen py-16 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-14 text-gray-800 text-center tracking-wide drop-shadow-sm">
          인적 사항 & 학력
        </h2>

        {/* 기본 인적 정보 */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-primary-700 border-b-4 border-primary-500 pb-2">
            기본 정보
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {basicInfo.map((info, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-primary-300 transition-shadow cursor-default"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full">
                  {info.icon}
                </div>
                <div className={`flex items-center w-full ${info.isEmail ? 'justify-between' : ''}`}>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-primary-700 text-lg">{info.label}</p>
                    <p className="text-gray-700 text-base">{info.value}</p>
                  </div>
                  {info.isEmail && (
                    <button
                      onClick={() => copyToClipboard(info.value)}
                      title="이메일 주소 복사"
                      className="p-1 rounded hover:bg-primary-200 transition flex-shrink-0"
                    >
                      <HiOutlineClipboard className="w-5 h-5 text-primary-600" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 학력 사항 */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-primary-700 border-b-4 border-primary-500 pb-2">
            학력 사항
          </h3>
          <ul className="space-y-6">
            {education.map((edu, idx) => (
              <li
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-primary-300 transition-shadow"
              >
                <p className="font-extrabold text-primary-700 text-xl">{edu.school}</p>
                <p className="text-gray-800 text-lg mt-1">
                  {edu.major} <span className="text-sm text-gray-600 font-medium">({edu.degree})</span>
                </p>
                <p className="text-gray-700 mt-1">학점: <span className="font-semibold">{edu.gpa}</span></p>
                <p className="text-gray-500 mt-2 italic">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 교육 사항 */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-primary-700 border-b-4 border-primary-500 pb-2">
            교육 사항
          </h3>
          <ul className="space-y-6">
            {trainings.map((training, idx) => (
              <li
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-primary-300 transition-shadow"
              >
                <p className="font-extrabold text-primary-700 text-xl">{training.title}</p>
                <p className="text-gray-800 text-lg mt-1">{training.institution}</p>
                <p className="text-gray-500 mt-2 italic">{training.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;