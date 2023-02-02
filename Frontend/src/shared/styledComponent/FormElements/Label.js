import styled from "styled-components";

const Label = styled.label`
  /* width: 100%; */
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};

  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};

  font-size: 15px;
  font-weight: ${(props) => (props.fontWeigth ? props.fontWeigth : "bold")};
  color: ${(props) => (props.color ? props.color : "")};

  cursor: ${(props) => (props.cursor ? props.cursor : "")};
  &:hover {
    transition: 2ms;
    color: ${(props) => (props.hoverColor ? props.hoverColor : "")};
  }
`;

export default Label;
