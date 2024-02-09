import React from "react";

export default function UpdateCard({ text, date }) {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
      <pre className="mb-2 text-wrap">{text}</pre>
      <p className="text-sm text-gray-500">Date:{date}</p>
    </div>
  );
}
