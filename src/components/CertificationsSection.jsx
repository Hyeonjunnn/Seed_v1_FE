import React from 'react';

const certifications = [
  {
    name: '정보처리기사',
    institution: '한국산업인력공단',
    date: '2023.11.15',
  },
  {
    name: 'SQL개발자(SQLD)',
    institution: '한국데이터산업진흥원(한국데이터베이스진흥원, 한국데이터진흥원)',
    date: '2023.04.14',
  },
  {
    name: 'PCCP Lv1(Python)',
    institution: '(주)그렙',
    date: '2025.07.03',
  },
  {
    name: 'PCCE Lv3(Java)',
    institution: '(주)그렙',
    date: '2025.01.06',
  },
];

const CertificationsSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center tracking-wide drop-shadow-sm">
          자격증
        </h2>
        <ul className="space-y-8">
          {certifications.map(({ name, institution, date }, idx) => (
            <li
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg border border-green-200 hover:shadow-green-300 transition-shadow flex flex-col sm:flex-row sm:justify-between sm:items-center"
            >
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">{name}</h3>
                <p className="text-gray-700 mt-1">{institution}</p>
              </div>
              <span className="mt-4 sm:mt-0 text-gray-900 font-semibold text-lg">
                {date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsSection;