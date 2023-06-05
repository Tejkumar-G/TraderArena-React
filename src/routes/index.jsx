import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import AuthGuard from "../guards/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import Strategies from "../pages/Strategies";

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
        path: 'strategies',
        element: <Strategies />,
        index: true,
      },
      {
        path: "test",
        element: <h2>Test</h2>,
      },
    ],
  },
]);

export default router;
