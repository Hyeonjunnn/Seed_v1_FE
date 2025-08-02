import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Home = () => {
  const { isLoggedIn, userName, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* 소개 섹션 */}
      <main className="flex-grow container mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Seed Board에 오신 것을 환영합니다
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          Seed Board는 간단하고 직관적인 게시판 서비스입니다. 회원가입 후 자유롭게 글을 작성하고, 다른 사용자들과 소통하세요.
          게시판을 통해 최신 소식 공유, 질문과 답변, 커뮤니티 활동까지 모두 가능합니다.
        </p>

        <div className="flex space-x-8 max-w-4xl w-full justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 flex-1 hover:shadow-xl transition cursor-default">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">쉽고 빠른 글쓰기</h3>
            <p className="text-gray-600">
              로그인 후 누구나 간편하게 글을 작성하고 관리할 수 있습니다.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex-1 hover:shadow-xl transition cursor-default">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">실시간 소통</h3>
            <p className="text-gray-600">
              다른 사용자들과 댓글과 피드백을 주고받으며 활발한 커뮤니케이션이 가능합니다.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex-1 hover:shadow-xl transition cursor-default">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">언제 어디서나</h3>
            <p className="text-gray-600">
              반응형 웹 디자인으로 PC, 태블릿, 모바일 어디서든 편리하게 이용할 수 있습니다.
            </p>
          </div>
        </div>

        {!isLoggedIn && (
          <Link
            to="/signup"
            className="mt-12 inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition"
          >
            지금 회원가입 하기
          </Link>
        )}
      </main>

    </div>
  );
};

export default Home;