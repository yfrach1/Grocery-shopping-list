import React from "react";
import FlexDiv from "../../styledComponent/UIElements/FlexDiv";
import Button from "../../styledComponent/FormElements/Button";
import Input from "../../styledComponent/FormElements/Input";
import Form from "../../styledComponent/FormElements/Form";

import emailIcon from "../../../assets/email-icon.svg";
import lockIcon from "../../../assets/lock-icon.svg";
import showIcon from "../../../assets/show-icon.svg";
import hideIcon from "../../../assets/hide-icon.svg";
import nameIcon from "../../../assets/name-icon.svg";

import { signUpAction } from "../../store/user-actions";
import { validate } from "../../util/validators";

import { useForm } from "../../hooks/form-hook";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SignUpForm = ({ onError }) => {
  const [checkBox, setCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const dispatch = useDispatch();

  const signUpAction = (e) => {
    e.preventDefault();
    const userData = {
      NAME: name,
      EMAIL: email,
      PASSWORD: password,
      CONFIRMEDPASSWORD: confirmedPassword,
    };
    const error = validate(userData);
    if (error) {
      onError(error);
      return;
    }
  };
  return (
    <Form onSubmit={signUpAction}>
      <Input
        id={"name"}
        type={"text"}
        icon={nameIcon}
        placeholder={"Name"}
        onInput={setName}
      />
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
      <Input
        id={"password"}
        type={showPassword ? "text" : "password"}
        icon={lockIcon}
        passwordModeIcone={showPassword ? showIcon : hideIcon}
        showPassword={showPassword}
        onChangeShowPassword={setShowPassword}
        placeholder={"Confirm Password"}
        onInput={setConfirmedPassword}
      />
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
