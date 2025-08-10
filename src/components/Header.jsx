import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Header = () => {
  const { user } = useAuthStore();
  const isLoggedIn = !!user;
  const userName = user?.userName || '';
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '홈' },
    { path: '/boards', label: '게시판' },
    { path: '/portfolio', label: '포트폴리오' },
    { path: '/project', label: '프로젝트' },
  ];

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-primary-700">
          <Link to="/" className="hover:text-primary-600 transition-colors">
            Seed
          </Link>
        </h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`transition-colors ${
                    isActive
                      ? 'text-primary-600 font-semibold border-b-2 border-primary-600'
                      : 'hover:text-primary-600'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {isLoggedIn ? (
            <>
              <li className="text-primary-600 font-semibold">{userName}</li>
              <li>
                <Link
                  to="/logout"
                  className="hover:text-primary-600 transition-colors bg-transparent border-none cursor-pointer"
                >
                  로그아웃
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className={`transition-colors ${
                    location.pathname === '/login'
                      ? 'text-primary-600 font-semibold border-b-2 border-primary-600'
                      : 'hover:text-primary-600'
                  }`}
                >
                  로그인
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className={`transition-colors ${
                    location.pathname === '/signup'
                      ? 'text-primary-600 font-semibold border-b-2 border-primary-600'
                      : 'hover:text-primary-600'
                  }`}
                >
                  회원가입
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;