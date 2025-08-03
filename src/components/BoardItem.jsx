import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => {
  return (
    <li className="bg-white rounded-md shadow p-4 mb-4 hover:shadow-lg transition">
      <Link to={`/boards/${board.id}`} className="text-primary-700 font-semibold text-lg hover:underline">
        {board.title}
      </Link>
      <p className="text-gray-600 mt-1">작성자: {board.author}</p>
    </li>
  );
};

export default BoardItem;