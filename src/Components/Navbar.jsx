import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/Wrappers/Navbar";
import Logo from "./Logo";
import { useState } from "react";
import useAppProvider from "../Hooks/useAppProvider";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser, toggleSidebar } = useAppProvider();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={() => toggleSidebar()}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button onClick={() => logoutUser()} className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
