import React from 'react';

const BoardDetail = ({ board }) => {
  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.content}</p>
      <p>작성자: {board.author}</p>
    </div>
  );
};

export default BoardDetail;