import React from "react";
import { useDispatch } from "react-redux";
import Card from "../../shared/styledComponent/UIElements/Card";
import Label from "../../shared/styledComponent/FormElements/Label";
import FlexDiv from "../../shared/styledComponent/UIElements/FlexDiv";
import Alert from "../../shared/styledComponent/UIElements/Alert";

import Headline from "../../shared/styledComponent/Headline";
import SignInForm from "../../shared/components/FormTypes/SignInForm";
import SignUpForm from "../../shared/components/FormTypes/SignUpForm";
import SwitchModeLink from "../../shared/styledComponent/Navigation/NavLinks";
import AuthBackground from "../../shared/styledComponent/AuthBackground";
import { useState } from "react";
import ErrorModal from "../../shared/styledComponent/UIElements/ErrorModal";

const USERS = [
  {
    id: "u1",
    email: "yfrach1@gmail.com",
    password: "12345678",
  },
];

const Auth = ({ isLogInMode }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  console.log(error);
  return (
    <AuthBackground>
      {error && <ErrorModal error={error} onCancel={setError} />}
      <Card>
        <FlexDiv width={"80%"}>
          <Headline marginBottom={"25px"} marginTop={"20px"}>
            Grocery List
          </Headline>

          {isLogInMode ? (
            <SignInForm onError={setError} users={USERS} />
          ) : (
            <SignUpForm onError={setError} users={USERS} />
          )}
          <FlexDiv
            flexDirection={"row"}
            textAlign={" center"}
            marginTop={"5px"}
          >
            <Label fontWeigth={"none"} marginRight={"5px"} color={"white"}>
              {isLogInMode
                ? "Don't have an account?"
                : "Already have an account?"}
            </Label>
            <SwitchModeLink
              cursor={"pointer"}
              to={isLogInMode ? "/signUp" : "signIn"}
            >
              {isLogInMode ? "Sign Up" : "Log In"}
            </SwitchModeLink>
          </FlexDiv>
        </FlexDiv>
      </Card>
    </AuthBackground>
  );
};

export default Auth;
