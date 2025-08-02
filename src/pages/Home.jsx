import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBoards } from '../api/boardApi';

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['boards', 1],
    queryFn: () => fetchBoards(0, 10, 'boardNo,DESC', 1),
  });

  if (isLoading)
    return <div className="p-4 text-center text-gray-600">게시글 목록을 불러오는 중입니다...</div>;

  if (error)
    return <div className="p-4 text-center text-red-500">게시글 불러오기 중 오류가 발생했습니다.</div>;

  const boards = data?.content || [];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 네비게이션 */}
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-indigo-700">Seed Board</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
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

      {/* 게시글 목록 */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">게시판</h2>

        <ul className="max-w-4xl mx-auto space-y-5">
          {boards.length > 0 ? (
            boards.map((board) => (
              <li
                key={board.boardNo}
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition cursor-pointer"
              >
                <Link to={`/board/${board.boardNo}`} className="text-indigo-700 font-semibold text-2xl">
                  {board.title}
                </Link>
                <div className="text-gray-500 mt-2 flex justify-between text-sm">
                  <span>작성자: {board.userName}</span>
                  <span>{board.createdAt?.slice(0, 10)}</span>
                </div>
                {board.content && (
                  <p className="text-gray-600 mt-3 line-clamp-3">{board.content}</p>
                )}
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">아직 등록된 게시글이 없습니다.</p>
          )}
        </ul>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Seed Board. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;