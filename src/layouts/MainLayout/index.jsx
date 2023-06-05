import Header from './Header';
import NavDrawer from './NavDrawer';
import './style.scss';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className='nav-main-container'>
        <div>
        <NavDrawer />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
