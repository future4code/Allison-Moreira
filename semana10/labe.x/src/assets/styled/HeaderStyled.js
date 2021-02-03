import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #f2f2f2;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
`;

export const HeaderDiv = styled.div``;

export const Button = styled.button`
  border: none;
  border-radius: ${(props) => props.radius || "none"};
  border-bottom: ${(props) => props.borderBottom || "3px solid transparent"};
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || "transparent"};
  text-transform: uppercase;
  box-shadow: ${(props) => props.shadow || "none"};
  padding: ${(props) => props.padding || "none"};
  margin: ${(props) => props.margin || "0px 10px"};
  padding-bottom: ${props => props.pBottom || "none"}px;

  :hover {
    border-bottom: ${(props) => props.borderBottom || "1px solid rgb(234, 29, 44)"};
    font-weight: bold;
  }

  :active {
    border-bottom: ${(props) => props.borderBottomActive || "1px solid rgb(234, 29, 44)"};
    box-shadow: ${(props) => props.shadowActive || "none"};
    transform: ${(props) => props.translate};
    color: gray;
`;
