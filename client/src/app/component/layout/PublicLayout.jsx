import { Outlet } from 'react-router-dom'; 
import Header from '../header';

const PublicLayout = ({
  children,
  ...rest
}) => {
  return (
    <>
     
      <main>
        <Outlet/>
      </main>
    </>  
  );
};

export default PublicLayout;