import styled from "styled-components";

const Text = styled.div`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  word-wrap: break-word;
  font-size: 15px;
  padding: 0px 10px;
  text-align: center;
`;

export default Text;
