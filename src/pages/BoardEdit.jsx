// src/pages/BoardEdit.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchBoard, updateBoard } from '../api/boardApi';
import BoardForm from '../components/BoardForm';
import useAuthStore from '../store/authStore';
import useAlertStore from '../store/alertStore';
import useConfirmStore from '../store/confirmStore';

const BoardEdit = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const showAlert = useAlertStore((state) => state.showAlert);
  const showConfirm = useConfirmStore((state) => state.show);

  const { data: board } = useQuery({
    queryKey: ['board', no],
    queryFn: () => fetchBoard(no),
    enabled: !!no,
  });

  const mutation = useMutation({
    mutationFn: (data) => updateBoard(no, data),
    onSuccess: () => {
      showAlert('게시글 수정 완료', 'success');
      navigate(`/board/${no}`);
    },
    onError: (error) => {
      showAlert('게시글 수정 실패: ' + (error.message || '오류가 발생했습니다.'), 'error');
    },
  });

  const handleSubmit = (data) => {
    if (!user) {
      showAlert('로그인이 필요합니다.', 'error');
      return;
    }

    mutation.mutate({
      title: data.title,
      content: data.content,
      boardCategoryNo: data.boardCategoryNo || board.boardCategoryNo,
      userEmail: user.email,
    });
  };

  const handleCancel = () => {
    showConfirm(
      '수정을 취소하시겠습니까?\n변경 내용은 저장되지 않습니다.',
      () => navigate(`/board/${no}`)
    );
  };

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
        />
      </div>
    </div>
  );
};

export default BoardEdit;