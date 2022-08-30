/** **************************** Import Libs ****************************** */
import { combineReducers } from "redux";

/** **************************** Import Reducers ****************************** */
// import { changeStateReducer } from "./reducers/changeStateReducer";
import loginReducer from "./reducers/loginReducer";
import UserProfileReducer from "./reducers/userProfileReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  userProfile: UserProfileReducer,
});

export default rootReducer;
