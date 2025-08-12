import React from "react";

export default function KPICard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}