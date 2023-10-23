import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { Transition } from "../ui/TransationSlide";

type AddEventModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (title: string) => void;
};

const AddEventModal = ({ open, onClose, onConfirm }: AddEventModalProps) => {
  const [eventTitle, setEventTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = () => {
    if (eventTitle.trim() === "") {
      setError("Event title cannot be empty");
      return;
    }
    onConfirm(eventTitle);
    setEventTitle("");
    setError(null);
    onClose();
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={() => {
        setError(null);
        onClose();
      }}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "8px",
        },
      }}
      sx={{ zIndex: 9999 }}
    >
      <DialogTitle variant="h3" color="secondary">
        Event Title
      </DialogTitle>
      <DialogContent>
        <TextField
          value={eventTitle}
          onChange={(e) => {
            setEventTitle(e.target.value);
            setError(null);
          }}
          fullWidth
          error={!!error}
          helperText={error}
          autoFocus
          variant="filled"
          color="secondary"
        />
      </DialogContent>
      <DialogActions sx={{ mr: 2 }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleConfirm}
          color="success"
          sx={{ color: "grey.100" }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEventModal;
