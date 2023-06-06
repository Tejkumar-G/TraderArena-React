import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deleteStrategy } from "../../api/strategy";
import AlertDialog from "../../components/AlertDialog";

const DeleteButton = ({ strategyId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const deleteHandler = () => {
    dispatch(deleteStrategy(strategyId));
    closeDialogHandler();
    navigate(-1);
  };
  const alertContent = "Are you sure do you want to delete?";
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => setOpenDialog(true)}
      >
        Delete
      </Button>
      <AlertDialog
        open={openDialog}
        onClose={closeDialogHandler}
        onAccept={deleteHandler}
        onReject={closeDialogHandler}
        title="Delete Strategy"
        content={alertContent}
        acceptButtonLabel="Yes"
        rejectButtonLabel="No"
      />
    </>
  );
};

export default DeleteButton;
