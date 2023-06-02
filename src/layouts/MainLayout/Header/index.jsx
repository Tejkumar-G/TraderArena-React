import InputIcon from "@mui/icons-material/Input";
import './style.scss';
import { AppBar, Button, Hidden, Toolbar } from "@mui/material";


const Header = () => {
  return (
    <AppBar color="primary" sx={{ zIndex: 2300 }}>
      <Toolbar className="tool-bar">
        <img
          alt="Logo"
          src="src/assets/images/bitcoin-15506.png"
          className=""
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
