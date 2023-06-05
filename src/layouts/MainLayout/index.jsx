import Header from './Header';
import NavDrawer from './NavDrawer';
import './mainLayout.scss';
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
