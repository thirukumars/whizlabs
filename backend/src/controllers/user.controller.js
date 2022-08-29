/*
   controller Name : User
*/

/** ******************  Import httpStatus ******************************************************** */

const httpStatus = require("http-status");
/** ******************  Import pick,ApiError and catchAsync ******************************************************** */
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

/** ******************  Import Services ******************************************************** */
const { userService } = require("../services");

/*
function createUser  -  This function is used to create an user  
*/
const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body); // send to createUser request before create

  res.status(httpStatus.CREATED).send(user);
});

/*
function getUser  -  This function is used to get an user  based on specifie corematicaName and role
*/

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["userName"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await userService.queryUsers(filter, options, req);
  result.results = result.results.filter((e) => e.isDeleted !== true);
  res.send(result);
});

/*
function getUser  -  This function is used to get an user  based on id
*/
const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.status(200).send(user);
});

/*
function updateUser  -  This function is used to update an user  based on id
*/

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

/*
function deleteUser  -  This function is used to delete an user  based on id
*/
const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(200).send({ success: true });
});

// get user based on resource
const getUserByResource = catchAsync(async (req, res) => {
  const user = await userService.getResourceByRole("resource");
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

// get user based on sponsor
const getUserBySponsor = catchAsync(async (req, res) => {
  const user = await userService.getSponsorByRole("sponsor");
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

// this function post the sponsor details
const postSponsorDetails = catchAsync(async (req, res) => {
  const sponsorDetails = await userService.createSponsorDetails(req.body);

  if (sponsorDetails.error)
    res.status(httpStatus.CONFLICT).send(sponsorDetails);
  else res.status(httpStatus.CREATED).send(sponsorDetails);
});

// get the sponsor details
const getSponsorDetails = catchAsync(async (req, res) => {
  const result = await userService.getSponsorDetails(req.params.projectId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(result);
});

// post resource details
const postResourceDetails = catchAsync(async (req, res) => {
  const approvedService = await userService.createResourceDetails(req.body);
  res.status(httpStatus.CREATED).send(approvedService);
});

// get the resource details
const getResourceDetails = catchAsync(async (req, res) => {
  const result = await userService.getResourceDetails(req.params.projectId);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(result);
});
// getSponsoredUser
const getSponsoredUser = catchAsync(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const join = [
    {
      path: "projectId",
      model: "projects",
      populate: {
        path: "location",
        model: "locations",
        select: "location",
      },
    },
    {
      path: "userId",
      model: "users",
    },
  ]; // goalId pillarId'
  const joinOptions = "";
  const result = await userService.getSponsoredUser(
    filter,
    options,
    join,
    joinOptions,
    req
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(result);
});

// get the resource details
const updateResource = catchAsync(async (req, res) => {
  const result = await userService.updateResource(
    req.params.projectId,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(result);
});

const activeStatus = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["isLoggedIn", "lastSeen"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  // const result = await userService.activeStatus(filter, options, req);
  // console.log(result, "akajk");
  const status = await userService.activeStatus(filter, options, req);
  res.send(status);
});
/*
exporting all the function using module exports
*/
module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserByResource,
  getUserBySponsor,
  postSponsorDetails,
  getSponsorDetails,
  postResourceDetails,
  getResourceDetails,
  getSponsoredUser,
  updateResource,
  activeStatus,
};
