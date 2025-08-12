import React, { useState } from "react";
import BoardTable from "../../components/admin/AdminBoardTable";
import AdminBoardModal from "../../components/admin/AdminBoardModal";

const AdminBoardsPage = () => {
  const [boards, setBoards] = useState([
    { no: 1, title: "첫 번째 게시글", author: "홍길동", date: "2025-08-10" },
    { no: 2, title: "공지사항", author: "관리자", date: "2025-08-09" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);

  // 모달 열기 - 새 글
  const handleNew = () => {
    setSelectedBoard(null);
    setModalOpen(true);
  };

  // 모달 열기 - 수정
  const handleEdit = (board) => {
    setSelectedBoard(board);
    setModalOpen(true);
  };

  // 모달 닫기
  const handleClose = () => {
    setModalOpen(false);
    setSelectedBoard(null);
  };

  // 제출 처리 (생성/수정)
  const handleSubmit = (formData) => {
    if (selectedBoard) {
      // 수정 로직 예시 (임시)
      setBoards((prev) =>
        prev.map((b) => (b.no === selectedBoard.no ? { ...b, ...formData } : b))
      );
    } else {
      // 신규 로직 예시 (임시)
      const newBoard = {
        no: boards.length + 1,
        author: "관리자", // 임시
        date: new Date().toISOString().slice(0, 10),
        ...formData,
      };
      setBoards((prev) => [...prev, newBoard]);
    }
    handleClose();
  };

  // 삭제 처리 (임시)
  const handleDelete = (no) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setBoards((prev) => prev.filter((b) => b.no !== no));
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">게시판 관리</h1>
          <button
            onClick={handleNew}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            신규 게시글 등록
          </button>
        </div>

        <BoardTable boards={boards} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      {modalOpen && (
        <AdminBoardModal
          board={selectedBoard}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default AdminBoardsPage;