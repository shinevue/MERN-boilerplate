import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
