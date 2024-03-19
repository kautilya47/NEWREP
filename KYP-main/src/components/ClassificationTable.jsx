import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ClassificationTable = ({
  mpFilter,
  decisionFilter,
  productTypeFilter,
  commentsFilter,
  typeFilter,
}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    //Initializing filter options
    mpFilter: "",
    decisionFilter: "",
    productTypeFilter: "",
    commentsFilter: "",
    typeFilter: "",
  });

  //creating a dictionary to store marketplace values, used later to fetch CSI and IA links
  const mpDict = { NA: "1", EU: "3", US: "1", CA: "7", UK: "3", DE: "4", FR: "5", AU: "8", SG: "3", MP: "1", ES: "13169" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  //Function to apply filters
  const applyFilters = () => {
    let filteredResult = [...data];

    if (mpFilter && mpFilter !== "All") {
      filteredResult = filteredResult.filter((item) => item.mp === mpFilter);
    }
    if (decisionFilter && decisionFilter !== "All") {
      filteredResult = filteredResult.filter(
        (item) => item.decision === decisionFilter
      );
    }
    if (productTypeFilter) {
      filteredResult = filteredResult.filter((item) => {
        const productType = item.category || ""; //some of the category fields are emmpty Hence using this, can be removed later
        return productType
          .toLowerCase()
          .includes(productTypeFilter.toLowerCase());
      });
    }
    if (commentsFilter) {
      filteredResult = filteredResult.filter((item) =>
        item.comments.toLowerCase().includes(commentsFilter.toLowerCase())
      );
    }
    if (typeFilter) {
      filteredResult = filteredResult.filter((item) => item.prc === typeFilter);
    }

    setFilteredData(filteredResult);
  };

  //Event handler for filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  //Updating filteredData whenever filters change
  useEffect(() => {
    applyFilters();
  }, [mpFilter, decisionFilter, productTypeFilter, commentsFilter, typeFilter]);

  return (

    <table className="min-w-full text-wrap text-sm font-light table-fixed">
      <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
        <tr>
          <th scope="col" className=" px-6 py-4">
            ID
          </th>
          <th scope="col" className="w-28 px-6 py-4">
            ASIN
          </th>
          <th scope="col" className=" px-6 py-4">
            MP
          </th>
          <th scope="col" className=" px-6 py-4">
            Product type
          </th>
          <th scope="col" className=" px-6 py-4">
            Decision
          </th>
          <th scope="col" className=" px-6 py-4">
            Category
          </th>
          <th scope="col" className=" px-6 py-4">
            Comments
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr
            className="border-b dark:border-neutral-500"
            key={item._id}
          >
            <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
              {index + 1}
            </td>
            <td className="w-28 px-6 py-4 font-medium text-center">
              <Link to={`https://csi.amazon.com/view?view=simple_product_data_view&item_id=${item.asin}&marketplace_id=${mpDict[item.mp]}`} target="_blank">{item.asin}</Link>
            </td>
            <td className="whitespace-nowrap  px-6 py-4 font-medium text-center">
              {item.mp}
            </td>
            <td className=" px-6 py-4 font-medium text-center">
              {item.category}
            </td>
            <td className="whitespace-nowrap  px-6 py-4 font-medium text-center">
              {item.decision}
            </td>
            <td className="px-6 py-4 font-medium">
              {item.prc}
            </td>
            <td className="px-6 py-4 font-medium">
              {item.comments}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassificationTable;
