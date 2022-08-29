/*
   validation Name : user
*/

/** ***************** package  Import ******************************************************** */

const Joi = require("@hapi/joi");

/** ***************** validation Import ******************************************************** */
const { password } = require("./custom.validation");

/*
function createUser - This function is used to validate user inputs

*/
const createUser = {
  body: Joi.object().keys({
    _id: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    first_name: Joi.string(),
    last_name: Joi.string(),
    phone: Joi.string().allow(""),
    company: Joi.string(),
    job_title: Joi.string(),
  }),
};

/*
function getUser - This function is used to validate user inputs

*/
const getUsers = {
  query: Joi.object().keys({
    userName: Joi.string().allow(""),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string(),
  }),
};

/*
function updateUser - This function is used to validate user id and inputs  for updating

*/

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      job_title: Joi.string().allow(""),
      company: Joi.string().allow(""),
    })
    .min(1),
};

/*
function deleteUser - This function is used to validate the id to delete user

*/
const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string(),
  }),
};

// exporting all the functions

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
