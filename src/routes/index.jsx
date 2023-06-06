import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import MyStrategies from "../pages/MyStrategies";
import NewStrategy from "../pages/NewStrategy";
import SignUp from "../pages/SignUp";
import Strategies from "../pages/Strategies";
import ViewStrategy from '../pages/ViewStrategy';
import EditStrategy from '../pages/EditStrategy';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "strategies",
        element: <Strategies />,
        index: true,
      },
      {
        path: "my-strategies",
        element: <MyStrategies />,
      },
      {
        path: "new-strategy",
        element: <NewStrategy />,
      },
      {
        path: "strategy/:id",
        element: <ViewStrategy />,
      },
      {
        path: "strategy/edit/:id",
        element: <EditStrategy />,
      },
    ],
  },
]);

export default router;
