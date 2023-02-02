import React, { useState } from "react";
import Button from "../../styledComponent/FormElements/Button";
import Input from "../../styledComponent/FormElements/Input";
import Form from "../../styledComponent/FormElements/Form";
import emailIcon from "../../../assets/email-icon.svg";
import lockIcon from "../../../assets/lock-icon.svg";
import showIcon from "../../../assets/show-icon.svg";
import hideIcon from "../../../assets/hide-icon.svg";
import { validate } from "../../util/validators";
import CheckBox from "../../styledComponent/FormElements/CheckBox";

const SignInForm = ({ onError }) => {
  const [checkBox, setCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeCheckBoxHandler = () => {
    setCheckBox((prevMode) => !prevMode);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const userData = {
      EMAIL: email,
      PASSWORD: password,
    };
    const error = validate(userData);
    if (error) {
      onError(error);
      return;
    }

    //next step is to check log in details
  };
  return (
    <Form onSubmit={loginHandler}>
      <Input
        id={"email"}
        type={"text"}
        icon={emailIcon}
        placeholder={"Email"}
        onInput={setEmail}
      />
      <Input
        id={"password"}
        type={showPassword ? "text" : "password"}
        icon={lockIcon}
        passwordModeIcone={showPassword ? showIcon : hideIcon}
        showPassword={showPassword}
        onChangeShowPassword={setShowPassword}
        placeholder={"Password"}
        onInput={setPassword}
      />
      <Button type="submit">Log In</Button>
      <CheckBox onChange={changeCheckBoxHandler} />
    </Form>
  );
};

export default SignInForm;
