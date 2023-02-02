import styled from "styled-components";

const InputTextBox = styled.input`
  font-size: 15px;
  color: white;
  width: 100%;
  height: 30px;
  margin-bottom: 0px;
  border: none;
  padding-left: ${(props) => (props.paddingleft ? props.paddingleft : "0px")};
  background-color: rgba(3, 255, 255, 0) !important;
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

export default InputTextBox;
