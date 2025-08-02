import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBoards } from '../api/boardApi';
import useAuthStore from '../store/authStore';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const BoardList = () => {
  const { user } = useAuthStore();
  const isLoggedIn = !!user;
  const navigate = useNavigate();

  const [boardTitle, setBoardTitle] = useState('');
  const [sort, setSort] = useState('boardNo,DESC');

  const { data, isLoading, error } = useQuery({
    queryKey: ['boards', boardTitle, sort],
    queryFn: () => fetchBoards(0, 10, sort, 1, boardTitle),
    keepPreviousData: true,
  });

  const boards = data?.content || [];

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const formatDate = (utcDate) => {
    if (!utcDate) return '-';
    return dayjs(utcDate).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-10">
        {/* 제목 */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">게시판 목록</h2>
        </div>

        {/* 검색 & 정렬 + 글쓰기 버튼 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          {/* 검색 & 정렬 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* 검색 */}
            <form onSubmit={handleSearch} className="flex w-full sm:w-96 shadow-sm">
              <input
                type="text"
                value={boardTitle}
                onChange={(e) => setBoardTitle(e.target.value)}
                placeholder="제목 검색"
                className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white min-w-[80px] px-6 py-2 rounded-r-md hover:bg-indigo-700 transition text-base font-medium flex items-center justify-center"
              >
                검색
              </button>
            </form>

            {/* 정렬 */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-[42px]"
            >
              <option value="boardNo,DESC">최신순</option>
              <option value="boardNo,ASC">오래된순</option>
            </select>
          </div>

          {/* 글쓰기 버튼 */}
          {isLoggedIn && (
            <button
              onClick={() => navigate('/write')}
              className="mt-4 md:mt-0 bg-indigo-600 text-white px-6 py-2 w-[160px] whitespace-nowrap text-center rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              게시글 작성
            </button>
          )}
        </div>

        {/* 게시글 목록 */}
        {isLoading ? (
          <div className="p-4 text-center text-gray-600">게시글 목록을 불러오는 중입니다...</div>
        ) : error ? (
          <div className="p-4 text-center text-red-500">게시글 불러오기 중 오류가 발생했습니다.</div>
        ) : boards.length === 0 ? (
          <p className="text-center text-gray-500">등록된 게시글이 없습니다.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boards.map((board) => (
              <li
                key={board.boardNo}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <Link
                  to={`/board/${board.boardNo}`}
                  className="text-indigo-700 font-semibold text-xl block mb-3"
                >
                  {board.title}
                </Link>
                <p className="text-gray-600 line-clamp-2 mb-4">{board.content}</p>
                <div className="text-gray-500 flex justify-between text-sm">
                  <span>{board.userName}</span>
                  <span>{formatDate(board.createdAt)}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default BoardList;