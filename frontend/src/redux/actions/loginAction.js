/** **************************** Import Types ****************************** */
// import { toast } from "react-toastify";
import {
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
} from "../types/loginTypes";
import { postLoginRequestData, registerUserData } from "../../api/create";
// import "react-toastify/dist/ReactToastify.css";

export const LoginUsersRequest = () => ({
  type: LOGIN_USERS_REQUEST,
});
export const LoginUsersSuccess = (users) => ({
  type: LOGIN_USERS_SUCCESS,
  payload: users,
});
export const LoginUsersFailure = (error) => ({
  type: LOGIN_USERS_FAILURE,
  payload: error,
});

export const LoginUser = (data) => async (dispatch) => {
  console.log(data, "data");
  dispatch(LoginUsersRequest());
  return postLoginRequestData(data)
    .then((res) => {
      if (!res.error) {
        const loggedUser = res.user;
        const accessToken = res.tokens.access.token;
        const refreshToken = res.tokens.refresh.token;
        const accessExpiry = res.tokens.access.expires;
        const refreshExpiry = res.tokens.refresh.expires;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("accessExpiry", accessExpiry);
        localStorage.setItem("refreshExpiry", refreshExpiry);
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        // toast.success("Logged in Successfully");
        setTimeout(() => {
          window.location.href = "/user-profile";
        }, 3000);
        return res.user;
      }
      dispatch(LoginUsersFailure(res.error));
    })
    .catch((err) => console.log("Catch Error:", err));
};

export const RegisterUser = (data) => async (dispatch) => {
  console.log(data, "data");
  dispatch(LoginUsersRequest());
  return registerUserData(data)
    .then((res) => {
      if (!res.error) {
        const loggedUser = res.user;
        const accessToken = res.tokens.access.token;
        const refreshToken = res.tokens.refresh.token;
        const accessExpiry = res.tokens.access.expires;
        const refreshExpiry = res.tokens.refresh.expires;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("accessExpiry", accessExpiry);
        localStorage.setItem("refreshExpiry", refreshExpiry);
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        // toast.success("Registered Successfully");
        setTimeout(() => {
          window.location.href = "/user-profile";
        }, 3000);
        return res.user;
      }

      dispatch(LoginUsersFailure(res.error));
    })
    .catch((err) => console.log("Catch Error:", err));
};
