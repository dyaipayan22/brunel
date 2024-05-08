import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const Layout = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
