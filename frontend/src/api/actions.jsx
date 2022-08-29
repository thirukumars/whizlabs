/* eslint-disable */
/** ********************************* Import URL ************************************* */
import { hostConfig } from "../config"; // env
import { URL_CONSTANTS } from "./urls";

/** ****************************** Response Handler *********************************** */

const token = localStorage.getItem("accessToken");

const responseStatusHandler = (response) => {
  switch (response.status) {
    case 400:
      return response;
    case 401:
      return { error: "Unauthorized" };
    case 402:
      return { error: "Payment Required" };
    case 403:
      return { error: "Forbidden" };
    case 404:
      return { error: "Not Found" };
    case 405:
      return { error: "Method Not Allowed" };
    case 406:
      return { error: "Not Acceptable" };
    case 408:
      return { error: "Request Timeout" };
    case 409:
      return { error: "Request Already Exist" };
    case 410:
      return { error: "permanently deleted from server" };
    case 500:
      return { error: "Internal Server Error" };
    case 501:
      return { error: "Not Implemented" };
    case 502:
      return { error: "Bad Gateway" };
    case 503:
      return { error: "Service Unavailable" };
    case 504:
      return { error: " Gateway Timeout" };
    case 511:
      return { error: " Network Authentication Required" };
    case 200:
    case 201:
      return response;
    default:
      return false;
  }
};

/** ****************************** Error Handler *********************************** */
const errorHandler = (error) => error;

/** ****************************** Create Api *********************************** */
export const postDataApi = (requestUrl, params) =>
  fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((err) => {
      errorHandler(err);
    });

/** ****************************** View with query Api *********************************** */
export const getListByApi = (requestUrl, params, isTemporaryToken = null) => {
  let getParams = "?";
  if (
    params &&
    params.rowsPerPage &&
    params.rowsPerPage !== null &&
    params.rowsPerPage !== undefined
  ) {
    getParams += `limit=${params.rowsPerPage}`;
  }

  if (
    params &&
    params.currentPage &&
    params.currentPage !== null &&
    params.currentPage !== undefined
  ) {
    getParams += `&page=${params.currentPage}`;
  }
  if (
    params &&
    params.sortBy &&
    params.sortBy !== null &&
    params.sortBy !== undefined
  ) {
    getParams += `&sortBy=${params.sortBy}`;
  }
  if (
    params &&
    params.isActive !== null &&
    params.isActive !== "" &&
    params.isActive !== undefined
  ) {
    getParams += `&isActive=${params.isActive}`;
  }
  return fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${isTemporaryToken ? isTemporaryToken : token}`,
    },
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** View Api *********************************** */
export const viewDataByApi = (requestUrl, dataId, isTemporaryToken = null) =>
  fetch(`${hostConfig.API_URL}${requestUrl}/${dataId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${isTemporaryToken ? isTemporaryToken : token}`,
    },
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });

/** ****************************** Update by Id Api *********************************** */
export const putDataByIdApi = (
  requestUrl,
  params,
  id,
  roleId,
  role,
  method
) => {
  let getParams = "";
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}${getParams}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Update Api *********************************** */
export const putDataApi = (requestUrl, params) => {
  return fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Change password Api *********************************** */
/** ****************************** Delete by Id Api *********************************** */
export const deleteDataByIdApi = (requestUrl, id) =>
  fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });

/** ****************************** Delete Api *********************************** */
export const deleteDataApi = (requestUrl, params) =>
  fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
