import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "name", width: 200 },
  {
    field: "city",
    headerName: "city",
    width: 200,
  },
  { field: "company", headerName: "company", width: 200 },
  { field: "body", headerName: "Body", width: 200 },
];
const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  const [users, setUsers] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }, []);

  // console.log("ExampleData", tableData);
  console.log("ExampleData users", users)
  const rowData = users?.map((user) => {
    return {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      id: user?.id,
      website: user?.website,
      phone: user?.phone,
      company: user?.company?.name,
      city: user?.address?.city,
    };
  });

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={12}
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

export default DataTable;
