import React, { useCallback, useEffect, useState } from "react";
import InputTextBox from "./InputTextBox";
import FlexDiv from "../UIElements/FlexDiv";
import Icon from "./Icon";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const changePasswordModeHandler = useCallback(() => {
    props.onChangeShowPassword((prevMode) => !prevMode);
  }, [props.onChangeShowPassword]);

  const handleChange = useCallback((e) => {
    var newValue = e.target.value;

    setInputValue(newValue);
  }, []);

  const { onInput } = props;

  useEffect(() => {
    onInput(inputValue);
  }, [inputValue, onInput]);

  return (
    <FlexDiv
      position={"relative"}
      alignItems={"center"}
      flexDirection={"row"}
      borderBottom={"1px solid white"}
      paddingBottom={"10px"}
      marginBottom={"20px"}
    >
      <Icon src={props.icon} left={"0"} />
      {props.passwordModeIcone && (
        <Icon
          src={props.passwordModeIcone}
          right={"0"}
          onClick={changePasswordModeHandler}
        />
      )}
      <InputTextBox
        paddingleft={"35px"}
        type={props.type}
        placeholder={inputValue.length === 0 ? props.placeholder : inputValue}
        onChange={handleChange}
      />
    </FlexDiv>
  );
};

export default Input;
