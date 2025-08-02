import React, { useState, useEffect } from 'react';

const BoardForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [author, setAuthor] = useState(initialData?.author || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>제목</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>내용</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>작성자</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit">저장</button>
    </form>
  );
};

export default BoardForm;