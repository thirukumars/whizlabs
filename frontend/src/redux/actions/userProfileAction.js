/** **************************** Import Types ****************************** */
// import { toast } from "react-toastify";
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  CLEAR_USER_PROFILE_STATE,
} from "../types/userProfileType";
import { postUserData } from "../../api/create";
import { getUserList, getUserById } from "../../api/list";
import { updateUserData } from "../../api/updates";
// import "react-toastify/dist/ReactToastify.css";

export const UserProfileRequest = () => ({
  type: USER_PROFILE_REQUEST,
});
export const UserProfileSuccess = (users) => ({
  type: USER_PROFILE_SUCCESS,
  payload: users,
});
export const UserProfileFailure = (error) => ({
  type: USER_PROFILE_FAILURE,
  payload: error,
});
// export const clearUserProfileStateSuccess = () => ({
//   type: CLEAR_USER_PROFILE_STATE,
// });

export const createUserProfile = (data) =>
  async function(dispatch) {
    dispatch(UserProfileRequest());
    return postUserData(data)
      .then((res) => {
        if (!res.code && !res.error) {
          dispatch(UserProfileSuccess({ responseStatus: "success" }));
          // toast.success("Profile Created Successfully");
          return "success";
        }
        dispatch(UserProfileFailure(res.error));
        // toast.error(res.message || res.error);
        return res.message || res.error;
      })
      .catch((err) => console.log("Catch Error:", err));
  };

export const getUserProfileList = (data) =>
  async function(dispatch) {
    dispatch(UserProfileRequest());
    return getUserList(data)
      .then((res) => {
        if (!res.code && !res.error) {
          dispatch(UserProfileSuccess({ responseStatus: res.results }));
          return res;
        }
        dispatch(UserProfileFailure(res.error));
        // toast.error(res.message || res.error);
        return res.message || res.error;
      })
      .catch((err) => console.log("Catch Error:", err));
  };

export const updateUserProfile = (data, dataId) =>
  async function(dispatch) {
    dispatch(UserProfileRequest());
    return updateUserData(data, dataId)
      .then((res) => {
        if (!res.code && !res.error) {
          dispatch(UserProfileSuccess({ responseStatus: res }));
          // toast.success("Profile Updated Successfully");
          return "success";
        }
        dispatch(UserProfileFailure(res.error));
        // toast.error(res.message || res.error);
        return res.message || res.error;
      })
      .catch((err) => console.log("Catch Error:", err));
  };

export const UserProfileById = (params) =>
  async function(dispatch) {
    dispatch(UserProfileRequest());
    return getUserById(params)
      .then((res) => {
        if (!res.code) {
          dispatch(UserProfileSuccess({ responseStatus: res }));
          return res;
        }
        dispatch(UserProfileFailure(res.message));
        return res.message;
      })
      .catch((err) => console.log("Catch Error:", err));
  };

// export const ClearUserProfileState = (data) =>
//   async function(dispatch) {
//     dispatch(clearUserProfileStateSuccess());
//   };
