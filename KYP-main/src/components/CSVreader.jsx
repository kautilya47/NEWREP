import React, { useState } from "react";
import csvtojson from "csvtojson";

function CSVreader() {
  const [file, setFile] = useState();
  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = async function (event) {
        const csvOutput = event.target.result;

        try {
          // Use csvtojson to convert CSV to JSON
          const jsonArray = await csvtojson().fromString(csvOutput);

          console.log(jsonArray);

          // Assuming there's an API endpoint to which you want to send the JSON data
          const apiUrl = "http://localhost:3000/api/addData";

          // Send the JSON data as a POST request
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonArray),
          });

          // Handle the API response
          const responseData = await response.json();
          console.log(responseData);

          // Perform any additional actions with the API response
        } catch (error) {
          console.error(
            "Error converting CSV to JSON or sending POST request:",
            error
          );
        }
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <div className="text-white" style={{ textAlign: "center" }}>
      <h1>Bulk Upload</h1>
      <form className="">
        <input
          type={"file"}
          id="filePicker"
          accept={".csv"}
          onChange={handleOnChange}
        />
        <button
          className="border border-black px-2 bg-green-400 active:bg-green-600 shadow-lg"
          onClick={(e) => handleOnSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CSVreader;
