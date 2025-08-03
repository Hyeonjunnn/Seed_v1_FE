import React from 'react';

const BoardDetail = ({ board }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-primary-700 mb-4">{board.title}</h1>
      <p className="text-gray-700 whitespace-pre-wrap mb-6">{board.content}</p>
      <p className="text-gray-500 italic">작성자: {board.author}</p>
    </div>
  );
};

export default BoardDetail;