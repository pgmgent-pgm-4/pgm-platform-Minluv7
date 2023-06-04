import { Navigate, Outlet } from 'react-router-dom'; 

import { useAuth } from '../../context';
import { ROUTES} from '../../routes';

const UserLayout = ({
  children,
  ...rest
}) => {
  const { currentUser } = useAuth();

  return (
    currentUser
      ? <Outlet/>
      : <Navigate to={ROUTES.AUTH_SIGN_IN} />      
  );
};

export default UserLayout;