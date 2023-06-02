import Header from './Header';
import NavDrawer from './NavDrawer';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <NavDrawer />
      <Outlet />
    </div>
  );
};

export default MainLayout;
