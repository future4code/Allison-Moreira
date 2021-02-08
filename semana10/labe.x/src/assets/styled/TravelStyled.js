import styled from "styled-components";

export const TravelMain = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: ${(props) => props.columns};
  padding: ${(props) => props.padding}px;
`;

export const TravelContainer = styled.div`
  display: grid;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const TravelContent = styled.div`
  padding: 20px;
`;

export const Text = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${props=>props.size};
  margin: ${props=>props.margin};
`;

export const Button = styled.button`
  width: 100%;
  margin: 5px;
  padding: ${(props) => props.padding || "15px"};
  text-transform: uppercase;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || "rgb(234, 29, 44)"};
  color: ${(props) => props.color || "white"};
  font-weight: bold;

  :hover {
    background-color: ${(props) => props.bgHover || "#9a0712"};
  }
`;
