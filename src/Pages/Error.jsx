import Wrapper from "../assets/Wrappers/ErrorPage";
import img from "../assets/Images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page Not Found</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
