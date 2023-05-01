import { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/RegisterPage";
import Logo from "../Components/Logo";
import FormRow from "../Components/FormRow";
import Alert from "../Components/Alert";
import useAppProvider from "../Hooks/useAppProvider";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert, isLoading, registerUer, user, loginUser } =
    useAppProvider();
  const navigate = useNavigate();

  const toogleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUer(currentUser);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        navigate("/");
      }
    }, 300);
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />

        {values.isMember ? <h3>Login</h3> : <h3>Register</h3>}

        {showAlert && <Alert />}
        {/* name field */}
        <div className="form-row">
          {/* Name Field */}

          {!values.isMember && (
            <FormRow
              type="text"
              value={values.name}
              name="name"
              handleChange={handleChange}
            />
          )}

          {/* Email Field */}
          <FormRow
            type="email"
            value={values.email}
            name="email"
            handleChange={handleChange}
          />
          {/* Password Field */}
          <FormRow
            type="password"
            value={values.password}
            name="password"
            handleChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {!values.isMember ? "Register" : "Login"}
        </button>

        <p>
          {values.isMember ? "Not a Member Yet" : "Already a Member"}

          <button type="button" onClick={toogleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
