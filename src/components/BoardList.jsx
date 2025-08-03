import React from 'react';
import BoardItem from './BoardItem';
import { Link } from 'react-router-dom';

const BoardList = ({ boards }) => {
  if (!boards || boards.length === 0) {
    return <p className="text-gray-500 text-center mt-6">게시글이 없습니다.</p>;
  }

  return (
    <div>
      <ul>
        {boards.map((board) => (
          <BoardItem key={board.id} board={board} />
        ))}
      </ul>
      <div className="mt-6 text-center">
        <Link to="/write">
          <button className="bg-primary-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-700 transition">
            글쓰기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BoardList;