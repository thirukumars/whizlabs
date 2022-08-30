import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import UserProfile from "./pages/UserProfile";

/** **************************** Import Pages ****************************** */
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/Signup"));
// const UserProfile = React.lazy(() => import("./pages/UserProfile"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);
function App() {
  return (
    <React.Suspense fallback={loading}>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to={"/"}>
              Whizlabs
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">
                    Sign up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user-profile">
                    User Profile
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              {localStorage.getItem("loggedUser") ? (
                <Route path="/user-profile" element={<UserProfile />} />
              ) : (
                <Route
                  path="/user-profile"
                  element={<Navigate replace to="/" />}
                />
              )}
              <Route path="/*" element={<hl className="">Not Found</hl>} />
            </Routes>
          </div>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
