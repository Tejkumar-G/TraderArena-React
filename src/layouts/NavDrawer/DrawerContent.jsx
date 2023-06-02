import Profile from "./Profile";
import NavigationConfig from "./NavigationConfig";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
const DrawerContent = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <Profile />
      <List>
        {NavigationConfig.map((navItem) => (
          <ListItem key={navItem.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <navItem.icon />
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
