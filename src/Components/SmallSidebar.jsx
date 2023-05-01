import useAppProvider from "../Hooks/useAppProvider";
import Wrapper from "../assets/Wrappers/SmallSidebar";
import Logo from "./Logo";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppProvider();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            {/* <FaTimes /> */}
          </button>
          <header>
            <Logo />
          </header>
          {/* <NavLinks toggleSidebar={toggleSidebar} /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
