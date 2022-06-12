
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DataTableAxios = () => {
  const [tableData, setTableData] = useState([]);

  const [airlineData, setAirlineData] = useState([]);
  const [segmentData, setSegmentData] = useState([]);
  const [pricedItineraryData, setPricedItineraryData] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);
  // const [airlineData, setAirlineData] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://priceline-com-provider.p.rapidapi.com/v1/flights/search",
      params: {
        itinerary_type: "ONE_WAY",
        class_type: "ECO",
        location_arrival: "MSP",
        date_departure: "2022-11-15",
        location_departure: "JFK",
        sort_order: "PRICE",
        number_of_stops: "0",
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
        setAirlineData(response.data.airline)
        setSegmentData(response.data.segment)
        setPricedItineraryData(response.data.pricedItinerary)
        console.log("segment", response.data.segment)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log("tableDataAxios", tableData);
  console.log("andrewaxios", airlineData)
  
  const rowData1 = airlineData?.map((airline) => {
    // console.log("airlineData", airline)
    return {
      airlineName: airline?.name,      
    };
  });

  
  const rowData2 = segmentData?.map((segmented) => {
    // console.log("segmented", segmented)
    return {
      segmentedArrival: segmented?.arrivalDateTime,  
      segmentedDeparture: segmented?.departDateTime,  
      segmentedFlightNumber: segmented?.flightNumber, 
      segmentedmarketingAirline: segmented?.marketingAirline,   
    };
  });

  const rowData3 = pricedItineraryData?.map((pricedItinerary) => {
    // console.log("pricedItinerary", pricedItinerary)
    return {
      totalFare: pricedItinerary?.pricingInfo.totalFare,     
    };
  });


// console.log("airlineData", rowData1);
  return (
    <div className="container flex">
    {/* <TableContainer component={Paper} style={{ width: 300 }}>
    <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Airline</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowData1.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.airlineName}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  </TableContainer> */}
  <TableContainer component={Paper} style={{ width: 600 }}>
    <Table sx={{ maxWidth: 600 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
        <TableCell>Airline</TableCell>
          <TableCell>Arival</TableCell>
          <TableCell>Departure</TableCell>
          <TableCell>Flight Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowData2.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.segmentedmarketingAirline}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.segmentedArrival}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.segmentedDeparture}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.segmentedFlightNumber}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
      
    </Table>
  </TableContainer>
  <TableContainer component={Paper} style={{ width: 100 }}>
    <Table sx={{ maxWidth: 100 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Price</TableCell>
          {/* <TableCell>Departure</TableCell>
          <TableCell>Flight Number</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rowData3.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell  component="th" scope="row">
              ${row.totalFare}
            </TableCell>
            {/* <TableCell component="th" scope="row">
              {row.segmentedDeparture}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.segmentedFlightNumber}
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
      
      
    </Table>
  </TableContainer>
  </div>
  
  );
};

export default DataTableAxios;