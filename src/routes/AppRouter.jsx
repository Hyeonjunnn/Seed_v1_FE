import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Signup from '../pages/Signup';
import BoardList from '../pages/BoardList';
import BoardDetail from '../pages/BoardDetail';
import BoardCreate from '../pages/BoardCreate';
import BoardEdit from '../pages/BoardEdit';
import Portfolio from '../pages/Portfolio';
import ProjectList from '../pages/ProjectList';
import ProjectDetail from '../pages/ProjectDetail';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/boards" element={<BoardList />} />
    <Route path="/board/:no" element={<BoardDetail />} />
    <Route path="/write" element={<BoardCreate />} />
    <Route path="/edit/:no" element={<BoardEdit />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/project" element={<ProjectList />} />
    <Route path="/project/:no" element={<ProjectDetail />} />
  </Routes>
);

export default AppRouter;