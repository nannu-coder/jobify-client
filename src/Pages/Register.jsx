import { useState } from "react";
import Wrapper from "../assets/Wrappers/RegisterPage";
import Logo from "../Components/Logo";
import FormRow from "../Components/FormRow";
import Alert from "../Components/Alert";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        {/* name field */}
        <div className="form-row">
          {/* <label htmlFor="name" className="form-label">
            name
          </label> */}

          {/* Name Field */}

          <FormRow
            type="text"
            value={values.name}
            name="Name"
            onChange={handleChange}
          />

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

          {/* <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-input"
          /> */}
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
