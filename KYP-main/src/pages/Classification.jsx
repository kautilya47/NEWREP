import React, { useState } from "react";
import ClassificationTable from "../components/ClassificationTable";
import CSVreader from "../components/CSVreader";

function Classification() {
  const [selectedMPFilter, setSelectedMPFilter] = useState("");
  const [selectedDecisionFilter, setSelectedDecisionFilter] = useState("");
  const [selectedProductTypeFilter, setSelectedProductTypeFilter] =
    useState("");
  const [selectedCommentsFilter, setSelectedCommentsFilter] = useState("");
  return (
    <div className="flex">
      {/* container for sidebar */}
      <div>
        <div className="float-left w-full h-screen bg-slate-700 overflow-auto ">
          <div className="flex-column gap-5 p-10 justify-center ">
            <div className="inline-block">
              <h1 className="flex text-white">Marketplace</h1>
              <select
                className="text-black"
                value={selectedMPFilter}
                onChange={(e) => setSelectedMPFilter(e.target.value)}
              >
                <option>All</option>
                <option>US</option>
                <option>UK</option>
                <option>AU</option>
                <option>SG</option>
              </select>
            </div>
            <div className="inline-block">
              <h1 className="flex text-white">Decision</h1>
              <select
                className="text-black"
                value={selectedDecisionFilter}
                onChange={(e) => setSelectedDecisionFilter(e.target.value)}
              >
                <option>TP</option>
                <option>FP</option>
              </select>
            </div>
            <div>
              <h1 className="text-white">Product type</h1>
              <input
                type="text"
                value={selectedProductTypeFilter}
                onChange={(e) => setSelectedProductTypeFilter(e.target.value)}
              ></input>
            </div>
            <div>
              <h1 className="text-white">Comments</h1>
              <input
                type="text"
                value={selectedCommentsFilter}
                onChange={(e) => setSelectedCommentsFilter(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
      {/* container for sidebar */}
      <div className="flex justify-center float-left h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
        <div className="m-0">
          <ClassificationTable
            mpFilter={selectedMPFilter}
            decisionFilter={selectedDecisionFilter}
            productTypeFilter={selectedProductTypeFilter}
            commentsFilter={selectedCommentsFilter}
          />
        </div>
      </div>
      <div className="h-screen border-2 bg-slate-700">
        <CSVreader />
      </div>
    </div>
  );
}

export default Classification;
