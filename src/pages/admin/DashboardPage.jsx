import React from "react";
import KPICard from "../../components/KPICard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const chartData = [
  { month: "1월", users: 400, sales: 2400 },
  { month: "2월", users: 800, sales: 2210 },
  { month: "3월", users: 600, sales: 2290 },
  { month: "4월", users: 1200, sales: 2000 },
];

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">통계 & 분석</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <KPICard title="가입자 수" value="1,200명" />
        <KPICard title="활성 사용자" value="850명" />
        <KPICard title="매출" value="₩4,500,000" />
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-bold mb-4">월별 가입자 & 매출</h3>
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}