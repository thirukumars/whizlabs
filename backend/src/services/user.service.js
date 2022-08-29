/*
   Service Name : Users
*/

/** ***************** Models Import ******************************************************** */
const httpStatus = require("http-status");
const logger = require("../config/logger");
const { User, ApprovedRequest, SponsorDetails } = require("../models");

/** ***************** package Import ******************************************************** */

/** ***************** ApiError Import ******************************************************** */
const ApiError = require("../utils/ApiError");

/** ***************** Counter services Import ******************************************************** */
const counter = require("./counter.service");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */

const createUser = async (userBodyData) => {
  const userBody = userBodyData;

  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }

  const id = await counter.getCount("users"); // passing users id to get counter value to autoIncrement _id

  userBody._id = id.toString();
  userBody.createdBy = userBody.userId;
  try {
    const user = await User.create(userBody);
    return user;
  } catch (e) {
    logger.error(e);
  }
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\#\|\|]/g, "\\$&"); // To remove the mongo search paranthesis
}
const queryUsers = async (filterData, options, req) => {
  const filter = filterData;
  if (filter.userName) {
    filter.$or = [
      {
        last_name: {
          $regex: `${escapeRegExp(filter.userName)}`,
          $options: "i",
        },
      },
      {
        first_name: {
          $regex: `${escapeRegExp(filter.userName)}`,
          $options: "i",
        },
      },
    ];
  }
  delete filter.userName;
  console.log(filter, "filter");
  try {
    const users = await User.paginate(filter, options, {
      createdBy: 0,
      updatedBy: 0,
      isDeleted: 0,
    }); // This third argument is to remove the field from response

    return users;
  } catch (e) {
    logger.error(e);
  }
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  try {
    return User.find({ _id: id, isDeleted: false }, { isDeleted: 0 });
  } catch (e) {
    logger.error(e);
  }
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email, isDeleted: false, isActive: true });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBodyData) => {
  const updateBody = updateBodyData;

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  updateBody.updatedBy = updateBody.userId;
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  // await user.remove();
  user.isDeleted = true;
  await user.save();
  return user;
};

// exporting all the methods
module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
