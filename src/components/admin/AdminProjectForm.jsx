import React, { useState, useEffect } from "react";

const AdminProjectForm = ({ initialData, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [consistOf, setConsistOf] = useState("");
  const [job, setJob] = useState("");
  const [feature, setFeature] = useState("");
  const [summary, setSummary] = useState("");
  const [detail, setDetail] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [endedAt, setEndedAt] = useState("");
  const [statusContent, setStatusContent] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setType(initialData.type || "");
      setConsistOf(initialData.consistOf || "");
      setJob(initialData.job || "");
      setFeature(initialData.feature || "");
      setSummary(initialData.summary || "");
      setDetail(initialData.detail || "");
      setStartedAt(initialData.startedAt ? initialData.startedAt.slice(0, 10) : "");
      setEndedAt(initialData.endedAt ? initialData.endedAt.slice(0, 10) : "");
      setStatusContent(initialData.statusContent || "");
      setVisible(initialData.visible ?? true);
    } else {
      setName("");
      setType("");
      setConsistOf("");
      setJob("");
      setFeature("");
      setSummary("");
      setDetail("");
      setStartedAt("");
      setEndedAt("");
      setStatusContent("");
      setVisible(true);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      type,
      consistOf,
      job,
      feature,
      summary,
      detail,
      startedAt: startedAt || null,
      endedAt: endedAt || null,
      statusContent,
      visible,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-h-[65vh] overflow-y-auto pr-3"
      autoComplete="off"
    >
      {[
        { label: "프로젝트명", value: name, onChange: setName, required: true, type: "text" },
        { label: "유형", value: type, onChange: setType, type: "text" },
        { label: "구성", value: consistOf, onChange: setConsistOf, type: "text" },
        { label: "담당 업무", value: job, onChange: setJob, type: "text" },
        { label: "상태", value: statusContent, onChange: setStatusContent, type: "text" },
      ].map(({ label, value, onChange, required, type }) => (
        <div key={label}>
          <label className="block text-gray-700 font-semibold mb-2">{label}</label>
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      ))}

      <div>
        <label className="block text-gray-700 font-semibold mb-2">주요 기능</label>
        <textarea
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="기능들을 쉼표(,)로 구분해서 입력하세요"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">요약</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={2}
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">상세 설명</label>
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          rows={5}
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      <div className="flex space-x-6">
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2">시작일</label>
          <input
            type="date"
            value={startedAt}
            onChange={(e) => setStartedAt(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2">종료일</label>
          <input
            type="date"
            value={endedAt}
            onChange={(e) => setEndedAt(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-gray-700 font-semibold select-none">노출 여부</label>
        <input
          type="checkbox"
          checked={visible}
          onChange={(e) => setVisible(e.target.checked)}
          className="w-6 h-6 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
        />
      </div>

      <div className="flex justify-end space-x-4 mt-8">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition font-semibold"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition font-semibold"
        >
          저장
        </button>
      </div>
    </form>
  );
};

export default AdminProjectForm;