import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
