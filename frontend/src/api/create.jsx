/** ****************************** Import libs *********************************** */
import { postDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const postLoginRequestData = (params) =>
  postDataApi(URL_CONSTANTS.login, params);

export const registerUserData = (params) =>
  postDataApi(URL_CONSTANTS.register, params);

export const postLogoutRequestData = (params) =>
  postDataApi(URL_CONSTANTS.logout, params);

export const postUserData = (params) =>
  postDataApi(URL_CONSTANTS.users, params);
