import React from "react";

const AdminBoardTable = ({ boards, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
          <th className="px-5 py-3 text-center font-medium border-b">No</th>
          <th className="px-5 py-3 text-left font-medium border-b">제목</th>
            <th className="px-4 py-2 border">작성자</th>
            <th className="px-5 py-3 text-center font-medium border-b">작성일</th>
            <th className="px-5 py-3 text-center font-medium border-b">관리</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {boards.length > 0 ? (
            boards.map((board) => (
              <tr key={board.no} className="hover:bg-gray-50 transition">
                <td className="px-5 py-3 border text-center text-gray-700">{board.no}</td>
                <td className="px-4 py-2 border">{board.title}</td>
                <td className="px-4 py-2 border">{board.author}</td>
                <td className="px-4 py-2 border text-center">{board.date}</td>
                <td className="px-4 py-2 border text-center space-x-2">
                  <button
                    onClick={() => onEdit(board.no)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => onDelete(board.no)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-6 border text-center text-gray-500"
              >
                게시글이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBoardTable;