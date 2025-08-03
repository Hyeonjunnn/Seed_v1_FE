import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Logout from '../pages/Logout';
import BoardList from '../pages/BoardList';
import BoardWrite from '../pages/BoardWrite';
import Portfolio from '../pages/Portfolio';
import ProjectList from '../pages/ProjectList';
import ProjectDetail from '../pages/ProjectDetail';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/boards" element={<BoardList />} />
    <Route path="/board/:id" element={<Detail />} />
    <Route path="/write" element={<BoardWrite />} />
    <Route path="/edit/:id" element={<BoardWrite />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/project" element={<ProjectList />} />
    <Route path="/project/:no" element={<ProjectDetail />} />
  </Routes>
);

export default AppRouter;