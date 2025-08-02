import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBoard, updateBoard, fetchBoard } from '../api/boardApi';
import BoardForm from '../components/BoardForm';

const Write = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      fetchBoard(id).then(setInitialData);
    }
  }, [id]);

  const handleSubmit = async (data) => {
    if (id) {
      await updateBoard(id, data);
    } else {
      await createBoard(data);
    }
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? '게시글 수정' : '새 게시글 작성'}</h1>
      <BoardForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
};

export default Write;