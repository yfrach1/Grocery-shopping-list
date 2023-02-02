import styled from "styled-components";

const Icon = styled.img`
  position: absolute;
  height: 20px;
  width: 20px;
  color: red;
  left: ${(props) => (props.left ? props.left : "")};
  right: ${(props) => (props.right ? props.right : "")};
  /* margin-right: 10px;
  margin-left: 10px; */
  /* background-color: white; */
`;

export default Icon;
