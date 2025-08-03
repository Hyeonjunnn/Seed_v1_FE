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
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-gray-700 text-center">자격증</h2>
      <ul className="space-y-6">
        {certifications.map(({ name, institution, date }, idx) => (
          <li
            key={idx}
            className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-600">{institution}</p>
            </div>
            <span className="mt-3 sm:mt-0 text-primary-700 font-medium">{date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;