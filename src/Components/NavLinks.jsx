import { NavLink } from "react-router-dom";
import links from "../Utils/Links";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, id, icon } = link;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
