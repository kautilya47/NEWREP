import React, { useState } from "react";
import UpdateCard from "../components/UpdateCard";
import updatesData from "../components/updates_data.json";

export default function Updates() {
  const [keyword, setKeyword] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Function to filter updates data based on keyword and date range
  const filteredUpdates = updatesData.filter(update => {
    // Filter by keyword
    const keywordMatch = keyword === "" || update.updates.some(updateText => updateText.toLowerCase().includes(keyword.toLowerCase()));

    // Filter by date range
    const fromDateMatch = fromDate === "" || (new Date(update.date) >= new Date(fromDate));
    const toDateMatch = toDate === "" || (new Date(update.date) <= new Date(toDate));

    return keywordMatch && fromDateMatch && toDateMatch;
  });

  return (
    <div className="flex">
      <div className="float-left w-1/5 min-w-80 h-screen bg-slate-700 overflow-auto">
        <div className="flex-column gap-5 p-10 justify-center">
          <div className="inline-block">
            <h1 className="flex text-white">Marketplace</h1>
            <select className="text-black">
              <option>All</option>
              <option>US</option>
              <option>UK</option>
              <option>AU</option>
              <option>SG</option>
            </select>
          </div>
          <div>
            <h1 className="text-white">Keyword</h1>
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
            ></input>
          </div>
          <div>
            <h1 className="text-white">Date</h1>
            <div>
              <ul className="flex flex-col space-y-2">
                <li>
                  <label className="text-white">from:</label>
                  <input
                    type="date"
                    value={fromDate}
                    onChange={e => setFromDate(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label className="text-white">to:</label>
                  <input
                    type="date"
                    value={toDate}
                    onChange={e => setToDate(e.target.value)}
                  ></input>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
        {filteredUpdates.map((update, index) => (
          <UpdateCard key={index} updatearray={update.updates} date={update.date} tableData={update.updates_table_data} tableHeader={update.updates_table_header} />
        ))}
      </div>
    </div>
  );
}