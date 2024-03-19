import React from "react";
import ErrorsTable from "../components/ErrorsTable";

function Errors() {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="flex w-1/5 bg-slate-700">
          <div className="flex-col p-8">
            <div className="inline-block">
              <h1 className="flex text-white">Marketplace</h1>
              <select
                className="text-black"
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
              >
                <option>Toys</option>
                <option>Non-Toys</option>
              </select>
            </div>
            <div >
              <h1 className="text-white">Product type</h1>
              <input
                type="text"
              ></input>
            </div>
            <div>
              <h1 className="text-white">Keywords</h1>
              <input
                type="text"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
          <div className="m-0">
            <ErrorsTable />
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default Errors;
