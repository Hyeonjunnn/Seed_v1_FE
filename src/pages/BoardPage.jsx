import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchBoard, createBoard, updateBoard } from '../api/boardApi';
import useAuthStore from '../store/authStore';

const BoardPage = ({ mode }) => {
  const { no } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const isDetail = mode === 'detail';
  const isEdit = mode === 'edit';
  const isCreate = mode === 'create';

  const { data: board } = useQuery({
    queryKey: ['board', no],
    queryFn: () => fetchBoard(no),
    enabled: isDetail || isEdit,
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isEdit && board) {
      setTitle(board.title);
      setContent(board.content);
    }
  }, [isEdit, board]);

  const createMutation = useMutation({
    mutationFn: createBoard,
    onSuccess: () => {
      alert('게시글 작성 완료');
      navigate('/boards');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data) => updateBoard(no, data),
    onSuccess: () => {
      alert('게시글 수정 완료');
      navigate(`/board/${no}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return alert('제목과 내용을 입력하세요.');

    if (isCreate) {
      createMutation.mutate({ title, content, userEmail: user.email });
    } else if (isEdit) {
      updateMutation.mutate({ title, content, userEmail: user.email });
    }
  };

  if (isDetail && !board) return <div>게시글을 불러오는 중...</div>;

  return (
    <div className="min-h-screen bg-primary-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {isDetail ? (
          <>
            <h1 className="text-3xl font-bold mb-4">{board.title}</h1>
            <p className="text-gray-700 mb-6">{board.content}</p>
            <p className="text-sm text-gray-500">{board.userEmail}</p>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              className="w-full border rounded px-3 py-2"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용"
              className="w-full border rounded px-3 py-2"
              rows="6"
            />
            <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded">
              {isCreate ? '작성하기' : '수정하기'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BoardPage;