import React, { useEffect, useState } from 'react';
import { fetchBoards } from '../api/boardApi';
import BoardList from '../components/BoardList';

const Home = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards().then(setBoards).catch(console.error);
  }, []);

  return (
    <div>
      <h1>게시판</h1>
      <BoardList boards={boards} />
    </div>
  );
};

export default Home;