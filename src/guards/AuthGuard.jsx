import { useSelector } from 'react-redux';
import Login from '../pages/Login';
import PageLoader from '../components/PageLoader/PageLoader';

const AuthGuard = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  if (isLoading || isAuthenticated===null) return <PageLoader />;
  else if (isAuthenticated) return children;
  else return <Login />;
};

export default AuthGuard;
