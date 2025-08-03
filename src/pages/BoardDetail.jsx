import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBoard } from '../api/boardApi';
import useAuthStore from '../store/authStore';

const BoardDetail = () => {
  const { no } = useParams();
  const { user } = useAuthStore(); // 로그인한 사용자 정보 가져오기

  // React Query로 데이터 가져오기
  const { data: board, isLoading, error } = useQuery({
    queryKey: ['board', no],
    queryFn: () => fetchBoard(no),
    enabled: !!no,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        게시글을 불러오는 중입니다...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        게시글을 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  if (!board) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        게시글이 존재하지 않습니다.
      </div>
    );
  }

  // 이메일로 비교
  const canEdit = user && board.userEmail === user.email;

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
        {/* 제목 */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{board.title}</h1>

        {/* 작성자 & 날짜 */}
        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <span>{board.userName}</span>
          <span>{board.createdAt}</span>
        </div>

        {/* 본문 */}
        <div className="text-gray-700 leading-relaxed mb-8">{board.content}</div>

        {/* 버튼 영역 */}
        <div className="flex justify-between items-center border-t pt-6">
          <Link
            to="/boards"
            className="text-primary-600 hover:text-primary-700 font-medium transition"
          >
            ← 게시판 목록으로
          </Link>
          {canEdit && (
            <Link
              to={`/edit/${no}`}
              className="px-5 py-2 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-700 transition"
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