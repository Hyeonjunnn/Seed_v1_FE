import React from "react";

const NoticesPage = () => {
  return (
    <div>
      <h1>공지 / 알림 관리</h1>
      <p>공지사항과 알림 메시지를 관리할 수 있습니다.</p>
      <button>공지 작성</button>
      <ul>
        <li>[2025-08-10] 시스템 점검 안내</li>
        <li>[2025-08-05] 신규 기능 출시</li>
      </ul>
    </div>
  );
};

export default NoticesPage;