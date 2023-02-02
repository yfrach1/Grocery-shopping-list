const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
const HttpError = require("../models/http-error");
const User = require("../models/user");
const Company = require("../models/company");
export const signUp = async (userData) => {
  const { name, email, password } = userData;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    throw new HttpError("Signing up failed, please try again later.", 500);
  }
  if (existingUser) {
    throw new HttpError("User exists already, please login instead.", 422);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (error) {
    throw new HttpError("Could not create user, please try again.", 500);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    throw new HttpError("Signing up failed, please try again later.", 500);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    throw HttpError("Signing up failed, please try again later.", 500);
  }

  return { userId: createdUser.id, email: createdUser.email, token: token };
};

export const addList = async () => {
  const createdCompany = new Company({
    creator: "63d65071ea9459dffb0d86fb",
    name: "weekly",
    products: [
      { name: "red apple", category: ["fruits", "protein"] },
      { name: "cheese", category: ["dairy"] },
    ],
  });

  let existingUser;
  existingUser = await User.findOne({
    email: "yfrach12w1@gmail.com",
  });
  existingUser.comapnies.push(createdCompany);
  try {
    await createdCompany.save();
  } catch (err) {
    console.log("inside");
    throw new HttpError("Signing up failed, please try again later.", 500);
  }

  console.log(existingUser);
  return createdCompany;
};
