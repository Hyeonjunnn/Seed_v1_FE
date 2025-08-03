import React, { useState } from 'react';

const BoardForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [author, setAuthor] = useState(initialData?.author || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, author });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
      <div>
        <label className="block mb-2 font-semibold text-gray-700">제목</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
          placeholder="제목을 입력하세요"
        />
      </div>
      <div>
        <label className="block mb-2 font-semibold text-gray-700">내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
          placeholder="내용을 입력하세요"
        />
      </div>
      <div>
        <label className="block mb-2 font-semibold text-gray-700">작성자</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
          placeholder="작성자 이름을 입력하세요"
        />
      </div>
      <button
        type="submit"
        className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition"
      >
        저장
      </button>
    </form>
  );
};

export default BoardForm;