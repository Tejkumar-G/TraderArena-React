import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDrawerOpen } from "../../../redux/slices/layoutSlice";
import Logout from "./Logout";
import "./header.scss";

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

        <Logout />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
