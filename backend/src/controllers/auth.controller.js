/*
   controller Name : Auth
*/

/** ******************  Import httpStatus and catchAsync(from utils) ******************************************************** */

const httpStatus = require("http-status");
const cron = require("node-cron");
const catchAsync = require("../utils/catchAsync");
const config = require("../config");
/** *****************  Import Services required for Auth api ******************************************************** */
const {
  authService,
  userService,
  tokenService,
  emailService,
} = require("../services");

const User = require("../models/user.model");

// Register function is used to register the new user
const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

// Login function is used to logIn the registered user
const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

// Logout is to logout the logged user
const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken, req);
  req.logout();
  res.status(httpStatus.OK).send({ message: "logged out" });
});

// RefreshTokens is to create the auth token if token expires
const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

// forgot password is used to change the password with resetPasswordTokens
const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(
    req.body.email
  );
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

// resetPassword with resetPasswordToken
const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});
// export all the controller to use in routes
module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
};
