import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/Wrappers/SharedLayout";
import SmallSidebar from "../../Components/SmallSidebar";
import BigSidebar from "../../Components/BigSidebar";
import Navbar from "../../Components/Navbar";

const Layout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Layout;
