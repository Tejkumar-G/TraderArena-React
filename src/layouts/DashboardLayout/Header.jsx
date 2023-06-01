import InputIcon from '@mui/icons-material/Input';

import { AppBar, Button, Hidden, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar color='primary'>
      <Toolbar>
        {/* <img alt='Logo' /> */}
        <div />
        <Button color='inherit'>
          <InputIcon />
          <Hidden mdDown>Logout</Hidden>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
