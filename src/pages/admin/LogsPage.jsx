import React from "react";

const LogsPage = () => {
  return (
    <div>
      <h1>로그 / 이벤트 추적</h1>
      <p>시스템 로그와 이벤트 기록을 확인할 수 있습니다.</p>
      <pre>
        {`
[2025-08-10 14:22:03] 사용자 로그인: hong@example.com
[2025-08-10 14:25:18] 프로젝트 생성: Seed Platform
[2025-08-10 14:30:55] 권한 변경: hong@example.com -> 관리자
        `}
      </pre>
    </div>
  );
};

export default LogsPage;