import useAppProvider from "../Hooks/useAppProvider";
import Wrapper from "../assets/Wrappers/BigSidebar";
import Logo from "./Logo";
const BigSidebar = () => {
  const { showSidebar } = useAppProvider();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          {/* <NavLinks /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
