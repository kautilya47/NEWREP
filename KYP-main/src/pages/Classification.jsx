import React, { useState } from "react";
import ClassificationTable from "../components/ClassificationTable";
import CSVreader from "../components/CSVreader";

function Classification() {
  const [selectedMPFilter, setSelectedMPFilter] = useState("");
  const [selectedDecisionFilter, setSelectedDecisionFilter] = useState("");
  const [selectedProductTypeFilter, setSelectedProductTypeFilter] =
    useState("");
  const [selectedCommentsFilter, setSelectedCommentsFilter] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("");
  return (
    <div className="flex flex-row justify-center items-center">
      {/* container for sidebar */}
      {/* <div> */}
      <div className="w-1/2 min-w-80 max-w-max h-screen bg-slate-700 overflow-auto">
        <div className="flex-column gap-5 p-10 justify-center ">
          <div className="inline-block">
            <h1 className="flex text-white">Marketplace</h1>
            <select
              className="text-black"
              value={selectedMPFilter}
              onChange={(e) => setSelectedMPFilter(e.target.value)}
            >
              <option>All</option>
              <option>NA</option>
              <option>EU</option>
              <option>AU</option>
              <option>SG</option>
            </select>
          </div>
          <div className="inline-block">
            <h1 className="flex text-white">Category</h1>
            <select
              className="text-black"
              value={selectedTypeFilter}
              onChange={(e) => setSelectedTypeFilter(e.target.value)}
            >
              <option>Toys</option>
              <option>Non-Toys</option>
            </select>
          </div>
          <div>
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
          <div >
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
          <CSVreader />
        </div>
      </div>
      <div className="flex-auto  justify-center h-screen bg-gradient-to-r from-rose-100 to-teal-100 p-0 m-0 overflow-auto">
        {/* <div className="flex flex-col ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mb-16 ">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden"> */}
        <ClassificationTable
          mpFilter={selectedMPFilter}
          decisionFilter={selectedDecisionFilter}
          productTypeFilter={selectedProductTypeFilter}
          commentsFilter={selectedCommentsFilter}
          typeFilter={selectedTypeFilter}
        />
        {/* </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Classification;
