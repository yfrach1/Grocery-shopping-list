import styled from "styled-components";

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "30px")};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: 0;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  transform: ${(props) => (props.transform ? props.transform : "none")};
`;

export default Headline;
