import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBoard } from '../api/boardApi';
import useAuthStore from '../store/authStore';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const BoardDetail = () => {
  const { no } = useParams();
  const { user } = useAuthStore();

  const { data: board } = useQuery({
    queryKey: ['board', no],
    queryFn: () => fetchBoard(no),
    enabled: !!no,
  });

  if (!board) {
    return <div className="text-center py-10 text-gray-600">게시글이 없습니다.</div>;
  }

  const canEdit = user && board.userEmail === user.email;

  const formatDate = (date) => {
    if (!date) return '-';
    return dayjs(date).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm');
  };

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* 제목 */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{board.title}</h1>

        {/* 카테고리 */}
        <div className="text-sm text-primary-600 font-medium mb-4">
          {board.boardCategoryName || `카테고리 #${board.boardCategoryNo}`}
        </div>

        {/* 작성자 & 날짜 */}
        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <span>{board.userName}</span>
          <span>{formatDate(board.createdAt)}</span>
        </div>

        {/* 본문 */}
        <div className="text-gray-700 leading-relaxed mb-8 whitespace-pre-wrap">
          {board.content}
        </div>

        {/* 버튼 영역 */}
        <div className="flex justify-between border-t pt-6">
          <Link to="/boards" className="text-primary-600 hover:underline">
            ← 목록으로
          </Link>
          {canEdit && (
            <Link
              to={`/edit/${no}`}
              className="bg-primary-600 text-white px-5 py-2 rounded-md hover:bg-primary-700 transition"
            >
              수정하기
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;