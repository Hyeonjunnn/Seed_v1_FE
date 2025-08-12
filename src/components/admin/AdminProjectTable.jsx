import React from "react";

const AdminProjectTable = ({ projects, onEdit, onDelete, deleteLoading }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-5 py-3 text-center font-medium border-b">No</th>
            <th className="px-5 py-3 text-left font-medium border-b">프로젝트명</th>
            <th className="px-5 py-3 text-left font-medium border-b">유형</th>
            <th className="px-5 py-3 text-left font-medium border-b">담당 업무</th>
            <th className="px-5 py-3 text-center font-medium border-b">상태</th>
            <th className="px-5 py-3 text-center font-medium border-b">노출</th>
            <th className="px-5 py-3 text-center font-medium border-b">관리</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {projects.length > 0 ? (
            projects.map((project) => (
              <tr key={project.projectNo} className="hover:bg-gray-50">
                <td className="px-5 py-3 border text-center text-gray-700">{project.projectNo}</td>
                <td className="px-5 py-3 border font-semibold">{project.name}</td>
                <td className="px-5 py-3 border">{project.type}</td>
                <td className="px-5 py-3 border">{project.job}</td>
                <td className="px-5 py-3 border text-center">{project.statusContent}</td>
                <td className="px-5 py-3 border text-center">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                      project.visible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {project.visible ? "노출" : "비노출"}
                  </span>
                </td>
                <td className="px-5 py-3 border text-center space-x-2">
                  <button
                    onClick={() => onEdit(project)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => onDelete(project.projectNo)}
                    disabled={deleteLoading}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition disabled:bg-red-300"
                  >
                    {deleteLoading ? "삭제 중..." : "삭제"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="px-5 py-6 border text-center text-gray-500"
              >
                등록된 프로젝트가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProjectTable;