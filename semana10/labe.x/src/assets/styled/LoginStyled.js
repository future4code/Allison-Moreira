import styled from "styled-components";

export const FormMain = styled.div`
  height: 100vh;
  display: flex;
  margin: ${props=>props.margin};
`;
export const FormDiv = styled.div`
  margin: auto;
  width: ${(props) => props.width};
  height: 75vh;
  box-shadow: ${(props) => props.shadow || "none"};
  border-radius: 8px;
  padding: 36px 50px;
  background-color: #fff;
  align-self: center;
  margin: ${(props) => props.margin || "5px 0px"};
  text-align: center;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.bold || "none"};
  color: ${(props) => props.color || "#717171"};
  border-radius: 40px;
  padding: ${(props) => props.padding};
  margin: 10px 0;
`;

export const Input = styled.input`
  width: 100%;
  margin: 5px;
  padding: 12px;
  font-size: 18px;
  color: #717171;
`;

export const Button = styled.button`
  width: 100%;
  margin: 5px;
  padding: ${props=>props.padding || '15px'};
  text-transform: uppercase;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  background-color: ${props=>props.bgColor || 'rgb(234, 29, 44)'};
  color: ${props=>props.color || 'white'};
  font-weight: bold;

  :hover {
    background-color: ${props=>props.bgHover || '#9a0712'};
  }
`;
