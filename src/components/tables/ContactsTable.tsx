
import TableLayout from "./TableLayout";
import { GridColDef } from "@mui/x-data-grid";
import {mockDataContacts } from "../../data/mockData";

const ContactsTable = () => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      minWidth: 100,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "registrarId",
      headerName: "Register ID",
      flex: 1,
      minWidth: 100,
      headerAlign: "left",
      align: "left",
      // editable:true
    },
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
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
      minWidth: 100,
      editable: true,
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
      field: "address",
      headerName: "Address",
      flex: 1,
      minWidth: 300,
      type: "string",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      minWidth: 100,
      type: "string",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
      minWidth: 100,
      type: "number",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
  ];
  return <TableLayout mockData={mockDataContacts} columns={columns} />;
};

export default ContactsTable;
