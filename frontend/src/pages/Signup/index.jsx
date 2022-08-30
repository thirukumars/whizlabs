import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../redux/actions";
const SignUp = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form, "form...");
  };
  const onSumbit = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(form));
    // .then((res) => console.log(res, "di"));
    console.log(form, "fo.");
  };
  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="first_name"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="last_name"
          onChange={onChange}
        />
      </div>
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
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => onSumbit(e)}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/">sign in?</a>
      </p>
    </form>
  );
};

export default SignUp;
