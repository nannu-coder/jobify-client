import { useState } from "react";
import Wrapper from "../assets/Wrappers/RegisterPage";
import Logo from "../Components/Logo";
import FormRow from "../Components/FormRow";
import Alert from "../Components/Alert";
import useAppProvider from "../Hooks/useAppProvider";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert } = useAppProvider();

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
    console.log(values);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />

        {values.isMember ? <h3>Login</h3> : <h3>Register</h3>}

        {showAlert && <Alert />}
        {/* name field */}
        <div className="form-row">
          {/* <label htmlFor="name" className="form-label">
            name
          </label> */}

          {/* Name Field */}

          {!values.isMember && (
            <FormRow
              type="text"
              value={values.name}
              name="Name"
              onChange={handleChange}
            />
          )}

          {/* Email Field */}
          <FormRow
            type="text"
            value={values.email}
            name="Email"
            onChange={handleChange}
          />

          {/* Password Field */}
          <FormRow
            type="password"
            value={values.password}
            name="Password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
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
