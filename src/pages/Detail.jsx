import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBoard, deleteBoard } from '../api/boardApi';
import BoardDetail from '../components/BoardDetail';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetchBoard(id).then(setBoard).catch(console.error);
  }, [id]);

  const handleDelete = async () => {
    await deleteBoard(id);
    navigate('/');
  };

  if (!board) return <p>로딩 중...</p>;

  return (
    <div>
      <BoardDetail board={board} />
      <button onClick={() => navigate(`/edit/${id}`)}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default Detail;