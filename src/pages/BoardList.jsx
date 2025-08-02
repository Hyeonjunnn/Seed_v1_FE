import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Write = () => {
  const { id } = useParams(); // 수정 모드 체크
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(id ? '게시글이 수정되었습니다.' : '게시글이 작성되었습니다.');
  };

  return (
    <Layout>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {id ? '게시글 수정' : '새 글 작성'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 h-40 focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            {id ? '수정 완료' : '작성 완료'}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Write;