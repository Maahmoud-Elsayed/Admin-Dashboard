import TableLayout from "./TableLayout";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import {  mockDataInvoices } from "../../data/mockData";
import { Typography } from "@mui/material";

const InvoicesTable = () => {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5, minWidth: 100 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      type: "string",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      minWidth: 150,
      type: "string",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 200,
      type: "string",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      minWidth: 100,
      type: "number",
      editable: true,
      headerAlign: "left",
      align: "left",
      renderCell: (params: GridRenderCellParams) => (
        <Typography color="secondary">${params.row.cost}</Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 100,
      type: "date",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
  ];
  return <TableLayout mockData={mockDataInvoices} columns={columns} />;
};

export default InvoicesTable;
