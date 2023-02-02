import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  border: 0;
  font-size: 20px;
  width: ${(props) => (props.width ? props.width : "60%")};
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "orange")};

  padding: 5px 50px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "15px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "15px"};
  text-align: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "15px"};

  border-top: ${(props) => (props.borderTop ? props.borderTop : "0")};
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
`;

export default Button;
