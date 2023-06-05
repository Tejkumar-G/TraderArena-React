import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const AlertDialog = ({
  open,
  onClose,
  onAccept,
  onReject,
  title,
  content,
  acceptButtonLabel = "Yes",
  rejectButtonLabel = "No",
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onReject}>{rejectButtonLabel}</Button>
        <Button onClick={onAccept} autoFocus>
          {acceptButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
