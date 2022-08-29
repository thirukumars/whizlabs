/*
    Roles   
*/

// In this roles for an user is assigned.

const roles = ["user"];
const presentState = ["active", "inActive"];

const userArray = ["manageUsers", "getUsers"];

const roleRights = new Map();
roleRights.set(roles[0], userArray);

module.exports = {
  roles,
  roleRights,
  presentState,
};
