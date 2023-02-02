export const validate = (userData) => {
  let error = false;
  for (const [key, value] of Object.entries(userData)) {
    switch (key) {
      case "NAME": {
        if (value.length === 0) {
          error = "Please enter the name.";
        }

        break;
      }

      case "EMAIL": {
        if (value.length === 0) {
          error = "Please enter the email address.";
        } else if (
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) === false
        ) {
          error = "Please enter a valid email.";
        }

        break;
      }

      case "PASSWORD": {
        if (value.length === 0) {
          error = "Please enter the password.";
        } else if (value.length < 6) {
          error = "The password cannot be less then 6 characters.";
        }

        break;
      }

      case "CONFIRMEDPASSWORD": {
        if (value.length === 0) {
          error = "Please enter the password again.";
        } else if (value !== userData.PASSWORD) {
          error = "The password should match.";
        }

        break;
      }
    }

    if (error) {
      return error;
    }
  }
  return error;
};
