const express = require("express");
const { userValidator } = require("../middleware/userValidator");

const userRouter = express.Router();
const { signUp, addList } = require("../controllers/userContorller");

userRouter.post("/signup", userValidator.signUp, signUp);
userRouter.get("/addList", addList);

module.exports = userRouter;
