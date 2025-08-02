import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Header = () => {
  const { user, logout } = useAuthStore();
  const isLoggedIn = !!user;
  const userName = user?.userName || '';

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-700">
          <Link to="/" className="hover:text-indigo-600 transition-colors">
            Seed
          </Link>
        </h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              홈
            </Link>
          </li>
          <li>
            <Link to="/boards" className="hover:text-indigo-600 transition-colors">
              게시판
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="text-indigo-600 font-semibold">{userName}</li>
              <li>
                <button
                  onClick={logout}
                  className="hover:text-indigo-600 transition-colors bg-transparent border-none cursor-pointer"
                >
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:text-indigo-600 transition-colors">
                  로그인
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-indigo-600 transition-colors">
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