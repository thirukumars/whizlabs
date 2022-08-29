/** **************************** Import Types ****************************** */
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  CLEAR_USER_PROFILE_STATE,
} from "../types/userProfileType";

const initialState = {
  loading: false,
  storeUserProfileResponse: "",
  error: "",
};

const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        storeUserProfileResponse: "",
      };
    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        storeUserProfileResponse: action.payload.responseStatus,
        error: "",
      };
    case USER_PROFILE_FAILURE:
      return {
        loading: false,
        storeUserProfileResponse: "error",
        error: action.payload,
      };
    case CLEAR_USER_PROFILE_STATE:
      return {
        loading: false,
        storeUserProfileResponse: "",
        error: "",
      };
    default:
      return state;
  }
};

export default UserProfileReducer;
