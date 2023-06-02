import { Box, Drawer } from "@mui/material";
import './style.scss';
import DrawerContent from "./DrawerContent";
import { useState } from "react";

const NavDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      component="nav"
      className='nav-bar'
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        
        variant="permanent"
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
