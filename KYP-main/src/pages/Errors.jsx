import React from "react";
import ErrorsTable from "../components/ErrorsTable";

function Errors() {
  return (
    <div className="flex justify-center h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
      <div className="m-0">
        <ErrorsTable />
      </div>
    </div>
  );
}

export default Errors;
