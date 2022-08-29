/** ****************************** Import libs *********************************** */
import { putDataByIdApi, putDataApi, changePasswordDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const updateUserData = (params, id, token) =>
  putDataByIdApi(URL_CONSTANTS.users, params, id, token);
