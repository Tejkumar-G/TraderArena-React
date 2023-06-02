import InputIcon from "@mui/icons-material/Input";

import { AppBar, Button, Hidden, Toolbar } from "@mui/material";


const Header = () => {
  return (
    <AppBar color="primary" sx={{ zIndex: 2300 }}>
      <Toolbar className="flex justify-between">
        <img
          alt="Logo"
          src="src/assets/images/bitcoin-15506.png"
          className="w-14 h-14"
        />
        <Button color="inherit" className="inline">
          <InputIcon />
          <Hidden mdDown>Logout</Hidden>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
