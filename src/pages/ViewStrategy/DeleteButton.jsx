import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from '../../components/AlertDialog';
import { useState } from 'react';


const DeleteButton = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const closeDialogHandler = () =>{
        setOpenDialog(false)
    }

    const deleteHandler = () =>{
        closeDialogHandler()
    }
    const alertContent = "Are you sure do you want to delete?"
  return (
    <>
    <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={()=>setOpenDialog(true)}>
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
