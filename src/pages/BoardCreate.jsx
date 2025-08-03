import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createBoard } from '../api/boardApi';
import BoardForm from '../components/BoardForm';
import useAuthStore from '../store/authStore';

const BoardCreate = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const mutation = useMutation({
    mutationFn: createBoard,
    onSuccess: () => {
      alert('게시글 작성 완료');
      navigate('/boards');
    },
  });

  const handleSubmit = (data) => {
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }
    mutation.mutate({ ...data, userEmail: user.email });
  };

  const handleCancel = () => {
    if (window.confirm('작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.')) {
      navigate('/boards');
    }
  };

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">게시글 작성</h1>
        <BoardForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isLoading={mutation.isLoading}
        />
      </div>
    </div>
  );
};

export default BoardCreate;