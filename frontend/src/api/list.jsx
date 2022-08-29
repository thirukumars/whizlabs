/** ****************************** Import libs *********************************** */
import { getListByApi, viewDataByApi, downloadApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const getUserList = (params) =>
  getListByApi(URL_CONSTANTS.users, params);

export const getUserById = (dataId) =>
  viewDataByApi(URL_CONSTANTS.users, dataId);
