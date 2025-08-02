import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => {
  return (
    <li>
      <Link to={`/boards/${board.id}`}>
        <h3>{board.title}</h3>
      </Link>
      <p>작성자: {board.author}</p>
    </li>
  );
};

export default BoardItem;