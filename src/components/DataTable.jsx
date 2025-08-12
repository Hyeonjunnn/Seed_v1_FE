// components/DataTable.jsx
import React from "react";

const DataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-6 py-3 text-left font-semibold border-b border-gray-300"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={idx}
                className={`hover:bg-gray-50 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {columns.map((col) => {
                  // 컬럼명에 따라 key 지정 및 데이터 표시
                  const key = col.toLowerCase();
                  return (
                    <td
                      key={key}
                      className="px-6 py-3 border-b border-gray-200 text-gray-700"
                    >
                      {row[key]}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-6 text-center text-gray-400"
              >
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;