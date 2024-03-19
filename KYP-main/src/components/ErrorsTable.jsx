import React, { useState, useEffect } from "react";
import errordata from "./errors_data.json";

function ErrorsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(errordata);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mb-16">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full px-50 text-center text-sm font-light">
              <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Process
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    ASIN
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    MP or PRC
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Error type
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Error description
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Correct resolution
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr className="border-b dark:border-neutral-500" key={index}>
                    <td className="py-4 font-medium">{index + 1}</td>
                    <td className="py-4 font-medium">{row.process}</td>
                    <td className="py-4 font-medium">{row.asin}</td>
                    <td className="py-4 font-medium">{row.mp}</td>
                    <td className="py-4 font-medium">{row.error_type}</td>
                    <td className="py-4 font-medium">{row.error_desc}</td>
                    <td className="py-4 font-medium">{row.correct_resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorsTable;
