import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "itineraryType", headerName: "ID" },
  { field: "airport2", headerName: "airport", width: 300 },
  { field: "response.data.airline[0].name", headerName: "airline", width: 600 },
];

const DataTableAxios = () => {
  const [tableData, setTableData] = useState([]);

  const [airlineData, setAirlineData] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);
  // const [airlineData, setAirlineData] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://priceline-com-provider.p.rapidapi.com/v1/flights/search",
      params: {
        itinerary_type: "ONE_WAY",
        class_type: "FST",
        location_arrival: "MSP",
        date_departure: "2022-11-15",
        location_departure: "JFK",
        sort_order: "PRICE",
        number_of_stops: "1",
        price_max: "20000",
        number_of_passengers: "1",
        duration_max: "2051",
        price_min: "100",
        date_departure_return: "2022-11-16",
      },
      headers: {
        "X-RapidAPI-Key": "93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50",
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("tableDataAxios response.data", response.data);
        console.log("tableDataAxios axios", [response.data.airline[0].name]);
        console.log("tableDataAxios airline array", [response.data.airline])
        // can use this to get the info if we have to but need a way to get it out of here
        // ask how to get it out
        let airline1 = [response.data.airline];
        console.log("tableDataAxios airline1 axios", airline1);
        //
        // console.log("tableDataAxios attempted array", [response.data]);
        setTableData(response.data);
        setAirlineData([response.data.airline])
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log("tableDataAxios", tableData);
  console.log("andrewaxios", airlineData)

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={99}
        pagination
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map((rowId) =>
            parseInt(String(rowId), 10)
          );
          const rowsToDelete = tableData.filter((row) =>
            rowIds.includes(row.id)
          );
          setDeletedRows(rowsToDelete);
          console.log(deletedRows);
        }}
      />
    </div>
  );
};

export default DataTableAxios;
