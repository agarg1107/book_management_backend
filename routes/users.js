const express = require("express");
const { getAllUsers, getSingleUserById, createNewUser, updateUserById, deleteUser, getSubscriptionDetailsById } = require("../controller/user_control");


const { users } = require('../database/users.json');
const { get } = require("./books");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getSingleUserById);

router.post("/", createNewUser);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUser);

router.get("/subspriction-details/:id", getSubscriptionDetailsById);

module.exports = router;