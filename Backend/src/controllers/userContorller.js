import * as userService from "../services/userService";
const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const userData = { name, email, password };
  let result;
  try {
    result = await userService.signUp(userData);
    res.status(201).send(result);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
};

module.exports = {
  signUp,
};

const addList = async (req, res, next) => {
  try {
    result = await userService.addList();
    res.status(201).send(result);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
};

module.exports = {
  signUp,
  addList,
};
