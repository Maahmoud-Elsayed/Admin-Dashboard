import { Box, Typography, useTheme } from "@mui/material";
import TableLayout from "./TableLayout";
import { mockDataTeam } from "../../data/mockData";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const TeamTable = () => {
  const theme = useTheme();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      editable: false,
      type: "string" || "number",
      minWidth: 100,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      editable: true,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      align: "left",
      headerAlign: "left",
      flex: 0.5,
      editable: true,
      minWidth: 100,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      minWidth: 150,
      editable: true,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 200,
      editable: true,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      minWidth: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: ["admin", "user", "manager"],

      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Box
            width="150px"
            py="4px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            gap={1}
            sx={{ background: theme.palette.primary.main, color: "grey.200" }}
          >
            {params.row.access === "admin" && (
              <AdminPanelSettingsOutlinedIcon  />
            )}
            {params.row.access === "manager" && (
              <SecurityOutlinedIcon  />
            )}
            {params.row.access === "user" && <LockOpenOutlinedIcon />}
            <Typography color="inherit">{params.row.access}</Typography>
          </Box>
        );
      },
    },
  ];
  return <TableLayout mockData={mockDataTeam} columns={columns} />;
};

export default TeamTable;
