import React from "react";

export default function UpdateCard({ updatearray, date, tableData, tableHeader }) {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
      <p>Date: {date}</p>
      {tableData ? (
        <table className="table-auto">
          <thead>
            <tr>
              {tableHeader.map((headerName, index) =>
                <th key={index} className="px-4 py-2">{headerName}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr key={index}>
                {rowData.map((data, index) => (
                  <td key={index} className="border px-4 py-2">
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <ul>
        {updatearray.map((update, index) => (
          <li key={index}>{update}</li>
        ))}
      </ul>
    </div>
  );
}
