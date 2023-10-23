import { Box, useTheme } from "@mui/material";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridToolbarQuickFilter,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import DeleteEventModal from "../modals/DeleteEventModal";

type TablePops = {
  mockData: GridRowsProp;
  columns: GridColDef[];
};
interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

const TableLayout = ({ mockData, columns }: TablePops) => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [rowToDelete, setRowToDelete] = useState<GridRowId | null>(null);

  useEffect(() => {
    setRows(mockData);
  }, [mockData]);

  const theme = useTheme();

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
    setRowToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (rowToDelete) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== rowToDelete));
    }
    setIsDeleteConfirmationOpen(false);
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRowToDelete(id);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      const newData: GridRowModel = {};
      for (const key in mockData[0]) {
        if (key === "registrarId" || key === "id") {
          newData[key] = id;
        } else {
          newData[key] = "";
        }
      }
      if ("registrarId" in newData) {
        newData["registrarId"] = id;
      }
      setRows((oldRows) => [...oldRows, { ...newData, isNew: true }]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
      }));
    };
    return (
      <GridToolbarContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 2 },
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "nowrap",
          gap: { xs: 1, sm: 0 },
        }}
      >
        <GridToolbarQuickFilter />
        <Box
          display="flex"
          gap={{ xs: 0, sm: 2 }}
          justifyContent={{ xs: "space-between", sm: "end" }}
          width="100%"
          pb={{ xs: 1, sm: 0 }}
        >
          <Button
            startIcon={<AddIcon fontSize="small" />}
            onClick={handleClick}
            sx={{ width: "86.6px" }}
          >
            Add
          </Button>
          <GridToolbarExport />
        </Box>
      </GridToolbarContainer>
    );
  }

  const actions = {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    getActions: ({ id }: { id: GridRowId }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<SaveIcon />}
            label="Save"
            sx={{
              color: "success.main",
            }}
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            sx={{
              color: "error.main",
            }}
          />,
        ];
      }

      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          sx={{
            color: "secondary.main",
          }}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          sx={{
            color: "error.main",
          }}
        />,
      ];
    },
  };

  return (
    <>
      <Box
        width="100%"
        mt="40px"
        mx="auto"
        height="70vh"
        sx={{
          justifyContent: "center",
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-root": {
            backgroundColor: `${theme.palette.background.paper}`,
            borderRadius: "10px",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderTop: "none",
            color: "grey.200",
            backgroundColor: theme.palette.purple.main,
          },
          "& .MuiCheckbox-root": {
            color: `${theme.palette.success.light}!important`,
          },
          "& .MuiButton-text ": {
            color: "grey.200",
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.success.dark
                : theme.palette.success.light,
            px: 1,
            py: "3px",
            "&:hover": { backgroundColor: theme.palette.success.main },
          },
          "& .MuiTextField-root": {
            backgroundColor: `${theme.palette.background.default}`,
            p: "3px",
            borderRadius: 2,
            width: { xs: "100%", sm: "auto" },
          },
          display: "grid",
          gridAutoColumns: "1fr",
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={[...columns, actions]}
          slots={{ toolbar: EditToolbar }}
          slotProps={{
            toolbar: {
              setRows,
              setRowModesModel,
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          disableRowSelectionOnClick
          scrollbarSize={22}
        />
      </Box>
      <DeleteEventModal
        title="user"
        isOpen={isDeleteConfirmationOpen}
        onClose={closeDeleteConfirmation}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default TableLayout;
