import Profile from "./Profile";
import NavigationConfig from "./NavigationConfig";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerOpen } from "../../../redux/slices/layoutSlice";

const DrawerContent = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const NavChangeHandler = (link) => {
    dispatch(setDrawerOpen());
    navigate(link);
  };
  return (
    <div>
      <Profile />
      <Divider className="divider" />
      <List>
        {NavigationConfig.map((navItem) => (
          <ListItem
            key={navItem.title}
            disablePadding
            className={`${pathname === navItem.href ? "active-nav" : ""}`}
          >
            <ListItemButton onClick={() => NavChangeHandler(navItem.href)}>
              <ListItemIcon>
                <navItem.icon
                  color={`${pathname === navItem.href && "primary"}`}
                />
              </ListItemIcon>
              <ListItemText primary={navItem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerContent;
