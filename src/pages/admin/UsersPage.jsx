import React from "react";

const UsersPage = () => {
  return (
    <div>
      <h1>사용자 관리</h1>
      <p>회원 목록, 권한 설정, 계정 상태 관리</p>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>이메일</th>
            <th>이름</th>
            <th>권한</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hong@example.com</td>
            <td>홍길동</td>
            <td>관리자</td>
            <td>활성</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;