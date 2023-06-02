import { Box, Drawer } from "@mui/material";

import DrawerContent from "./DrawerContent";
import { useState } from "react";

const drawerWidth = 240;
const NavDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "20%" },
        }}
        className="z-40"
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "20%" },
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
