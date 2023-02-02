import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  height: 30px;
  border: 1px ridge lightgray;
  /* margin-top: ${(props) => (props.marginTop ? props.marginTop : "10px")}; */

  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};

  color: ${(props) => (props.color ? props.color : "")};

  cursor: "pointer";
  &:hover {
    transition: 2ms;
    color: ${(props) => (props.hoverColor ? props.hoverColor : "")};
  }
`;

export default Select;
