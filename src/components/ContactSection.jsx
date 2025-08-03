import React from 'react';
import { contactIcons } from '../utils/techIcons';

const ContactSection = () => {
  const EmailIcon = contactIcons.email;
  const GithubIcon = contactIcons.github;
  const TistoryIcon = contactIcons.tistory;

  return (
    <section className="bg-white py-16 px-6 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">연락처</h2>
        <div className="space-y-4 inline-block text-left">
          {[
            {
              Icon: EmailIcon,
              label: '이메일',
              value: 'dev_sklg0602@naver.com',
              link: null,
            },
            {
              Icon: GithubIcon,
              label: 'GitHub',
              value: 'github.com/Hyeonjunnn',
              link: 'https://github.com/Hyeonjunnn',
            },
            {
              Icon: TistoryIcon,
              label: 'Tistory',
              value: 'hyeonjunnn.tistory.com',
              link: 'https://hyeonjunnn.tistory.com',
            },
          ].map(({ Icon, label, value, link }, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* 아이콘 영역 */}
              <div className="w-6 flex justify-center">
                <Icon className="text-primary-600" size={22} />
              </div>
              {/* 라벨 + 값 */}
              <div className="flex gap-2">
                <span className="min-w-[80px] font-medium text-gray-700">{label}:</span>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-gray-700">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;