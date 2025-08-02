import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">게시글 상세보기</h1>
    <p className="text-gray-600 mb-4">이곳에 게시글 내용이 표시됩니다. (ID: {id})</p>
    <div className="flex justify-between">
        <Link
        to="/"
        className="text-indigo-600 hover:underline"
        >
        홈으로
        </Link>
        <Link
        to={`/edit/${id}`}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
        수정하기
        </Link>
    </div>
    </div>
  );
};

export default Detail;