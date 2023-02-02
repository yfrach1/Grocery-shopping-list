import React from "react";
import InputCheckBox from "./InputCheckBox";
import Label from "./Label";
import FlexDiv from "../UIElements/FlexDiv";

const CheckBox = (props) => {
  return (
    <FlexDiv flexDirection={"row"} alignItems={"center"} textAlign={"center"}>
      <InputCheckBox type="checkbox" onClick={props.onChange} />
      <Label fontWeigth={"none"}>Remember me</Label>
    </FlexDiv>
  );
};

export default CheckBox;
