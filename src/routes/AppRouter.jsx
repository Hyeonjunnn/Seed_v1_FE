import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BoardList from '../pages/BoardList';
import Detail from '../pages/Detail';
import Write from '../pages/Write';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<BoardList />} />
      <Route path="/board/:id" element={<Detail />} />
      <Route path="/write" element={<Write />} />
      <Route path="/edit/:id" element={<Write />} />
    </Routes>
  </Router>
);

export default AppRouter;