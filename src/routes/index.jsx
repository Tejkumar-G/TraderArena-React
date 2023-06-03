import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import AuthGuard from '../guards/AuthGuard';
import MainLayout from '../layouts/MainLayout';
import Strategies from '../pages/Strategies';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: (
        <MainLayout />
    ),
    children: [
      {
        path: 'strategies',
        element: <Strategies />,
        index:true
      },
    ],
  },
]);

export default router;
