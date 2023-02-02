import styled from "styled-components";

const Option = styled.option`
  /* font-size: 15px; */
  /* font-weight: ${(props) =>
    props.fontWeigth ? props.fontWeigth : "bold"}; */
  color: ${(props) => (props.color ? props.color : "red")};

  cursor: ${(props) => (props.cursor ? props.cursor : "")};
  /* &:hover {
    transition: 2ms;
    color: ${(props) => (props.hoverColor ? props.hoverColor : "")};
  } */
`;

export default Option;
