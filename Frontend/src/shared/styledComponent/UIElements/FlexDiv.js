import styled from "styled-components";

const FlexDiv = styled.div`
  position: ${(props) => (props.position ? props.position : "static")};
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};

  width: ${(props) => (props.width ? props.width : "100%")};

  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};

  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};

  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};

  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-right: ${(props) => (props.marginRigth ? props.marginRigth : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
  border: ${(props) => (props.border ? props.border : "0px")};
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : "0px"};

  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "0px"};
`;

export default FlexDiv;
