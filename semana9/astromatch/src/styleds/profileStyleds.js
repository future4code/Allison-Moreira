import styled from "styled-components";

export const Main = styled.div`
  padding: 15px;
  margin: 15px;
  background-image: url(${props => props.bgMain});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 60vh;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  animation: 0.5s ease 0s 1 normal forwards running none;
  position: relative;
  border-radius: 20px;
`;

export const Text = styled.p`
  color: #fff;
  font-weight: ${(props) => props.bold};
  font-size: ${(props) => props.fontSize}px;
  text-align: left;
  margin-left: 10px;
  display: flex;
`;

export const Button = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: ${(props) => props.border};
  background: ${(props) => props.bg || "white"};
  color: ${(props) => props.color};
  font-size: ${props => props.fontSize || "50"}px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  :hover {
    background: ${(props) => props.bgHover};
    color: ${(props) => props.colorHover};
    font: ${props => props.font || "400 33.3333px Arial"};
  }
`;

export const Position = styled.div`
  position: absolute;
  bottom: 0px;
  top: 40vh;
  width: 55.99vh;
  left: 0px;
  padding: 10px;
  border-radius: 20px;
  background-image:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
`;
