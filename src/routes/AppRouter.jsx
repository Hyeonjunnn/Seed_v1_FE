import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 일반 사용자
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

// 관리자
import AdminRoute from './AdminRoute';
import AdminLayout from '../layouts/AdminLayout';
import DashboardPage from '../pages/admin/DashboardPage';
import AdminBoardsPage from '../pages/admin/AdminBoardsPage';
import AdminProjectsPage from '../pages/admin/AdminProjectsPage';
import TechsPage from '../pages/admin/TechsPage';
import NoticesPage from '../pages/admin/NoticesPage';
import UsersPage from '../pages/admin/UsersPage';
import LogsPage from '../pages/admin/LogsPage';

const AppRouter = () => (
  <Routes>
    {/* 일반 사용자 페이지 */}
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

    {/* 관리자 페이지 */}
    <Route path="/admin" element={<AdminRoute />}>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="boards" element={<AdminBoardsPage />} />
        <Route path="projects" element={<AdminProjectsPage />} />
        <Route path="techs" element={<TechsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="logs" element={<LogsPage />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRouter;