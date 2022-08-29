import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginUser } from "../../redux/actions";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form, "form...");
  };
  const onSumbit = (e) => {
    e.preventDefault();
    LoginUser(form)
      .then((res) => console.log(res, "res........"))
      .catch((err) => console.log(err, "....."));
    console.log(form, "fo.");
  };
  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            onSumbit(e);
          }}
        >
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Create an account{" "}
        <NavLink className="nav-link" to="/sign-up">
          Sign Up
        </NavLink>
      </p>
    </form>
  );
};

export default Login;
