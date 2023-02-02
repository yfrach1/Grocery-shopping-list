const HttpError = require("../models/http-error");
const User = require("../models/user");

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

export const loadUserData = () => {
  const data = { userData, gameData };
  return data;
};

export const saveUserGameMode = (newGameData) => {
  gameData = {
    userData: newGameData.userData,
    computerData: newGameData.computerData,
  };
  return;
};
