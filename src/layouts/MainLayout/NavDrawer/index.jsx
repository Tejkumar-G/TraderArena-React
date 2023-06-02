import { Box, Drawer } from "@mui/material";
import "./style.scss";
import DrawerContent from "./DrawerContent";
import { setDrawerOpen } from "../../../redux/slices/layoutSlice";
import { useDispatch, useSelector } from "react-redux";

const NavDrawer = () => {
  const { drawerOpen } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(setDrawerOpen());
  };
  
  return (
    <Box component="nav">
      <Drawer
        className="drawer"
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer variant="permanent" className="drawer lg-drawer">
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
