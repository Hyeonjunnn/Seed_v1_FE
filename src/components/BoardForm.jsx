import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBoardCategories } from '../api/boardCategoryApi';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const BoardForm = ({ initialData = {}, onSubmit, onCancel, isLoading }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [selectedCategory, setSelectedCategory] = useState(initialData.boardCategoryNo || '');

  const { data: categories, isLoading: isCategoryLoading } = useQuery({
    queryKey: ['boardCategories'],
    queryFn: fetchBoardCategories,
  });

  useEffect(() => {
    if (initialData.boardCategoryNo) {
      setSelectedCategory(initialData.boardCategoryNo);
    }
  }, [initialData]);

  const formatDate = (date) => {
    if (!date) return '';
    return dayjs(date).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, boardCategoryNo: selectedCategory });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 작성일자 표시 (예시) */}
      {initialData.createdAt && (
        <div className="text-sm text-gray-500">
          작성일: {formatDate(initialData.createdAt)}
        </div>
      )}

      {/* 카테고리 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
        {isCategoryLoading ? (
          <p className="text-gray-500">카테고리 불러오는 중...</p>
        ) : (
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          >
            <option value="" disabled>
              카테고리를 선택하세요
            </option>
            {categories?.map((category) => (
              <option key={category.boardCategoryNo} value={category.boardCategoryNo}>
                {category.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* 제목 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      {/* 내용 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          rows="8"
          required
        />
      </div>

      {/* 버튼 영역 */}
      <div className="flex justify-end gap-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            취소
          </button>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`px-5 py-2 rounded-md text-white font-semibold transition ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {isLoading ? '저장 중...' : '저장'}
        </button>
      </div>
    </form>
  );
};

export default BoardForm;