import { useState } from "react";
import AlertDialog from "../../../components/AlertDialog";
import InputIcon from "@mui/icons-material/Input";
import { Hidden, IconButton } from "@mui/material";
import { logout } from "../../../api/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const alertContent = "Are you sure do you want to logout ?";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const openDialogHandler = () => {
    setOpenDialog(true);
  };
  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const logoutHandler = () => {
    console.log("frm log");
    const callBack = (loggedOut) => {
      closeDialogHandler();
      if (loggedOut)
        navigate("/", { replace: true, state: { forceRefresh: true } });
    };
    dispatch(logout(callBack));
  };
  return (
    <>
      <AlertDialog
        open={openDialog}
        onClose={closeDialogHandler}
        onAccept={logoutHandler}
        onReject={closeDialogHandler}
        title="Logout"
        content={alertContent}
        acceptButtonLabel="Yes"
        rejectButtonLabel="No"
      />
      <IconButton
        color="inherit"
        className="input-icon"
        onClick={openDialogHandler}
      >
        <InputIcon />
        <Hidden mdDown>Logout</Hidden>
      </IconButton>
    </>
  );
};

export default Logout;
