import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchBoard, updateBoard } from '../api/boardApi';
import BoardForm from '../components/BoardForm';
import useAuthStore from '../store/authStore';

const BoardEdit = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const { data: board, isLoading: isFetching } = useQuery({
    queryKey: ['board', no],
    queryFn: () => fetchBoard(no),
    enabled: !!no,
  });

  const mutation = useMutation({
    mutationFn: (data) => updateBoard(no, data),
    onSuccess: () => {
      alert('게시글 수정 완료');
      navigate(`/board/${no}`);
    },
  });

  const handleSubmit = (data) => {
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }

    // 요청 데이터 구성 (title, content, boardCategoryNo 필수)
    mutation.mutate({
      title: data.title,
      content: data.content,
      boardCategoryNo: data.boardCategoryNo || board.boardCategoryNo,
      userEmail: user.email, // 서버에서 작성자 검증용
    });
  };

  const handleCancel = () => {
    if (window.confirm('수정을 취소하시겠습니까? 변경 내용은 저장되지 않습니다.')) {
      navigate(`/board/${no}`);
    }
  };

  if (isFetching) {
    return <div className="text-center py-10 text-gray-600">게시글 불러오는 중...</div>;
  }

  if (!board) {
    return <div className="text-center py-10 text-gray-600">게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">게시글 수정</h1>
        <BoardForm
          initialData={board}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isLoading={mutation.isLoading}
        />
      </div>
    </div>
  );
};

export default BoardEdit;