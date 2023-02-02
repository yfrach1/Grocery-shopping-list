import styled from "styled-components";
import image from "../../assets/groceries-background.jpeg";

const AuthBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 2px solid red; */
  width: 100%;
  background-image: url("${image}");
  background-position: center top;
`;

export default AuthBackground;
