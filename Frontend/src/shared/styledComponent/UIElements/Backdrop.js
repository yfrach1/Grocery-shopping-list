import React from "react";
import ReactDOM from "react-dom";
import Background from "../Background";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Background />,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
