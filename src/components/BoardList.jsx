import React from 'react';
import BoardItem from './BoardItem';
import { Link } from 'react-router-dom';

const BoardList = ({ boards }) => {
  if (!boards || boards.length === 0) {
    return <p>게시글이 없습니다.</p>;
  }

  return (
    <div>
      <ul>
        {boards.map((board) => (
          <BoardItem key={board.id} board={board} />
        ))}
      </ul>
      <Link to="/write">
        <button>글쓰기</button>
      </Link>
    </div>
  );
};

export default BoardList;