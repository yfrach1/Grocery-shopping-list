import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import FlexDiv from "./FlexDiv";
import Alert from "./Alert";
import Headline from "../Headline";
import Button from "../FormElements/Button";
import Text from "../UIElements/Text";

const ModalOverlay = (props) => {
  const content = (
    // transform: scale(-1, 1);
    <Alert>
      <Headline fontSize={"15px"} marginTop={"5px"}>
        🚨Alert
        <Headline
          fontSize={"15px"}
          // marginLeft={"0px"}
          transform={"scale(-1, 1)"}
        >
          🚨
        </Headline>
      </Headline>
      <Text marginTop={"10px"}>{props.error}</Text>
      <Button
        color={"#007aff"}
        marginBottom={"0px"}
        marginTop={"20px"}
        borderTop={"1px solid lightGray"}
        borderRadius={"0px"}
        width={"100%"}
        onClick={() => {
          props.onCancel(null);
        }}
      >
        OK
      </Button>
    </Alert>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Backdrop />

      <ModalOverlay {...props} />
    </React.Fragment>
  );
};

export default Modal;
