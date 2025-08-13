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
      isCopyable: true,
      copyLabel: '이메일 주소 복사',
      alertMessage: '이메일이 복사되었습니다!',
    },
    { 
      label: '전화번호', 
      value: '010-2044-7585', 
      icon: <HiOutlinePhone className="text-primary-600 w-5 h-5" />,
      isCopyable: true,
      copyLabel: '전화번호 복사',
      alertMessage: '전화번호가 복사되었습니다!',
    },
    { label: '주소', value: '서울특별시 마포구 연남동', icon: <HiOutlineLocationMarker className="text-primary-600 w-5 h-5" /> },
  ];

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert(message, 'success');
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
    <section className="min-h-screen py-6 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center tracking-wide drop-shadow-sm">
          인적 사항 & 학력
        </h2>

        {/* 기본 인적 정보 */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4 text-primary-700 border-b-4 border-primary-500 pb-1">
            기본 정보
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {basicInfo.map((info, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow border border-gray-200 hover:shadow-primary-300 transition-shadow cursor-default"
              >
                <div className="flex items-center justify-center w-9 h-9 bg-primary-100 rounded-full">
                  {info.icon}
                </div>
                <div className={`flex items-center w-full ${info.isCopyable ? 'justify-between' : ''}`}>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-primary-700">{info.label}</p>
                    <p className="text-gray-700 text-sm">{info.value}</p>
                  </div>
                  {info.isCopyable && (
                    <button
                      onClick={() => copyToClipboard(info.value, info.alertMessage)}
                      title={info.copyLabel}
                      className="p-1 rounded hover:bg-primary-200 transition flex-shrink-0"
                    >
                      <HiOutlineClipboard className="w-4 h-4 text-primary-600" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 학력 사항 */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-primary-700 border-b-4 border-primary-500 pb-1">
            학력 사항
          </h3>
          <ul className="space-y-3">
            {education.map((edu, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-primary-300 transition-shadow"
              >
                <p className="font-extrabold text-primary-700">{edu.school}</p>
                <p className="text-gray-800 text-sm mt-1">
                  {edu.major} <span className="text-xs text-gray-600 font-medium">({edu.degree})</span>
                </p>
                <p className="text-gray-700 text-sm mt-1">학점: <span className="font-semibold">{edu.gpa}</span></p>
                <p className="text-gray-500 text-xs mt-1 italic">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 교육 사항 */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary-700 border-b-4 border-primary-500 pb-1">
            교육 사항
          </h3>
          <ul className="space-y-3">
            {trainings.map((training, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-primary-300 transition-shadow"
              >
                <p className="font-extrabold text-primary-700">{training.title}</p>
                <p className="text-gray-800 text-sm mt-1">{training.institution}</p>
                <p className="text-gray-500 text-xs mt-1 italic">{training.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;