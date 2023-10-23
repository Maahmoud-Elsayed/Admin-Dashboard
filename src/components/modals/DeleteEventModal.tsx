import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Transition } from "../ui/TransationSlide";

type DeleteEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title:string
};
const DeleteEventModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
}: DeleteEventModalProps) => {
  return (
    <Dialog
      TransitionComponent={Transition}
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={onClose}
      sx={{ zIndex: 9999 }}
    >
      <DialogTitle variant="h3" color="secondary">
        Confirm
      </DialogTitle>
      <DialogContent>Are you sure you want to delete the {title} ?</DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onConfirm} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteEventModal;
