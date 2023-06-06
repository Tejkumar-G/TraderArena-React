import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setDrawerOpen } from "../../../redux/slices/layoutSlice";
import NavigationConfig from "./NavigationConfig";
import Profile from "./Profile";

const DrawerContent = () => {
  const { pathname } = useLocation();
  const { strategyAccess } = useSelector((state) => state.user);
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
        {NavigationConfig.map((navItem) => {
          if (
            navItem.title === "My Strategies" &&
            strategyAccess?.create === false
          )
            return;
          return (
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
          );
        })}
      </List>
    </div>
  );
};

export default DrawerContent;
