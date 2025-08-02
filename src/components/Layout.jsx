import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 네비게이션 */}
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Seed Board</h1>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-indigo-600 transition-colors">
                홈
              </Link>
            </li>
            <li>
              <Link to="/write" className="hover:text-indigo-600 transition-colors">
                글쓰기
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* 푸터 */}
      <footer className="bg-gray-100 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Seed Board. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;