import InputIcon from "@mui/icons-material/Input";
import "./style.scss";
import { AppBar, Hidden, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { setDrawerOpen } from "../../../redux/slices/layoutSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    dispatch(setDrawerOpen());
  };
  return (
    <AppBar color="primary" sx={{ zIndex: 2300 }}>
      <Toolbar className="tool-bar">
        <div className="menu-container">
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
          <img alt="Logo" src="src/assets/images/bitcoin-15506.png" />
        </div>

        <IconButton color="inherit" className="input-icon">
          <InputIcon />
          <Hidden mdDown>Logout</Hidden>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
