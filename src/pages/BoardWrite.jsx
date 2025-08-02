import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuthStore from '../store/authStore';
import { createBoard } from '../api/boardApi';
import { fetchBoardCategories } from '../api/boardCategoryApi';

const BoardWrite = () => {
  const { isLoggedIn, user } = useAuthStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  // 카테고리 API 호출
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['boardCategories'],
    queryFn: fetchBoardCategories,
  });

  // 초기 category 선택값 설정 (카테고리 로드되면 첫번째로 세팅)
  React.useEffect(() => {
    if (categories && categories.length > 0 && !category) {
      setCategory(categories[0].id || categories[0].boardCategoryNo || categories[0].value); // 백엔드 데이터에 맞게 키 수정
    }
  }, [categories, category]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center text-gray-600 text-lg">
          게시글 작성은 로그인 후 가능합니다.
        </div>
      </div>
    );
  }

  if (isLoading) return <div className="p-4 text-center">카테고리 로딩 중...</div>;
  if (error) return <div className="p-4 text-center text-red-500">카테고리 로딩 실패</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    try {
      await createBoard({
        title,
        content,
        boardCategoryNo: category,
        userName: user.userName,
      });

      alert('게시글이 성공적으로 등록되었습니다!');
      navigate('/boards');
    } catch (error) {
      console.error(error);
      alert('게시글 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
          게시글 작성
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              제목
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              카테고리
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {categories.map((cat) => (
                <option key={cat.id || cat.boardCategoryNo} value={cat.id || cat.boardCategoryNo}>
                  {cat.name || cat.title || cat.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              내용
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="10"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="내용을 입력하세요"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/boards')}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardWrite;