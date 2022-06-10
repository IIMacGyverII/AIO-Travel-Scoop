import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  // { field: 'id', headerName: 'id' },
  { field: 'name', headerName: 'Airline Name', width: 300 },
  { field: 'airport', headerName: 'airline', width: 600 },
  // {
  //   field: 'airline',
  //   headerName: 'Airline',
  //   valueGetter: (params) => {
  //     return params.getValue(params.id, "attributes").name;
  //   }
  // },
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);
  const [airlineData, setAirlineData] = useState([])

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    fetch('https://priceline-com-provider.p.rapidapi.com/v1/flights/search?itinerary_type=ROUND_TRIP&class_type=FST&location_arrival=MSP&date_departure=2022-11-15&location_departure=JFK&sort_order=PRICE&number_of_stops=1&price_max=20000&number_of_passengers=1&duration_max=2051&price_min=100&date_departure_return=2022-11-16', options)
      .then((data) => data.json())
      .then(data => {
        console.log("bulkfetch", data)
        console.log("dataTablefetch", data.airline)
      setAirlineData(data.airline)
      })   
      
  }, [])

  const rowData = airlineData?.map((airline) => {
    // console.log(airline.name)
    return {
      id: airline?.code,
      name: airline?.name,
      // email: airline?.email,
      // phone: airline?.phone,
      // id: airline?.id,
      // website: airline?.website,
      // phone: airline?.phone,
      // company: airline?.company?.name,
      // city: airline?.address?.city,
    };
  });

console.log("andrew", airlineData)
  console.log("dataTablefetch tabledata", tableData);
// console.log(flight)
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={99}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
          const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
          setDeletedRows(rowsToDelete);
          console.log(deletedRows);
        }}
      />
    </div>
  )
}

export default DataTable