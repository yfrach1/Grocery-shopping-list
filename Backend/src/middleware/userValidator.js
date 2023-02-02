const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");
const HttpError = require("../models/http-error");

const complexityOptions = {
  min: 8,
  max: 8,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4,
};

const validateUser = (req, res, next) => {
  // no change here
  console.log("inside middelware");
  const user = req.body;
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: passwordComplexity(complexityOptions),
  });

  const { error } = schema.validate(user);
  if (error) {
    const newError = new HttpError(error.details[0].message, 500);
    next(newError);
  }
  next();
  // return schema.validate(user);
};

exports.userValidator = {
  signUp: validateUser,
};
