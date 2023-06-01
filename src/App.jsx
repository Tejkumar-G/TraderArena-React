import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateAuth } from './redux/slices/userSlice';
import router from './routes';
import { verifyToken } from './api/user';

function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    // Check and validate if session exist
    (() => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) dispatch(verifyToken({ token: accessToken }));
      else dispatch(updateAuth(false));
    })();
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    </>
  );
}

export default App;
