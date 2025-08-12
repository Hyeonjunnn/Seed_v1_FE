import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { path: "/admin/dashboard", label: "통계 & 분석", icon: (
    <svg
      className="w-5 h-5 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  ) },
  { path: "/admin/boards", label: "게시판 관리", icon: (
    <svg
      className="w-5 h-5 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ) },
  { path: "/admin/projects", label: "프로젝트 관리", icon: (
    <svg
      className="w-5 h-5 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 20l9-5-9-5-9 5 9 5z" />
      <path d="M12 12V4" />
    </svg>
  ) },
  { path: "/admin/techs", label: "기술 관리", icon: (
    <svg
      className="w-5 h-5 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15A7.9 7.9 0 0 0 21 12a7.9 7.9 0 0 0-1.6-3" />
      <path d="M4.6 9A7.9 7.9 0 0 0 3 12a7.9 7.9 0 0 0 1.6 3" />
    </svg>
  ) },
  { path: "/admin/notices", label: "알림/공지 관리", icon: (
    <svg
      className="w-5 h-5 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M18 8a6 6 0 0 0-12 0v3H4l2 3h12l2-3h-2z" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ) },
  { path: "/admin/users", label: "사용자 관리", icon: (
    <svg
      className="w-5 h-5 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a7 7 0 0 1 13 0" />
    </svg>
  ) },
  { path: "/admin/logs", label: "로그/이벤트 추적", icon: (
    <svg
      className="w-5 h-5 mr-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </svg>
  ) },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      <div className="px-6 py-5 border-b border-gray-700">
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-400 select-none">
          ADMIN PANEL
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto mt-4">
        {menuItems.map(({ path, label, icon }) => {
          const active = pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center px-6 py-3 mb-1 rounded-md text-sm font-medium transition
                ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-700 hover:text-white text-gray-300"
                }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}