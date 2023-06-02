import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import AuthGuard from '../guards/AuthGuard';
import MainLayout from '../layouts/MainLayout';
const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        {/* <DashboardLayout /> */}
      </AuthGuard>
    ),
  },
  {
    path: '/dash',
    element: <MainLayout />,
  },
]);

export default router;
