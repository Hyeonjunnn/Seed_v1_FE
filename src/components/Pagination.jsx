import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-2 mt-6">
      {pages.map((page) => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
          className={`
            px-4 py-2 rounded-md font-semibold
            ${page === currentPage 
              ? 'bg-primary-700 text-white cursor-default' 
              : 'bg-primary-100 text-primary-700 hover:bg-primary-200'}
            transition
          `}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;