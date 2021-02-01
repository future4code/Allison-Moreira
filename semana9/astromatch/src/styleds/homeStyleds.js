import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  background: #bebeff;
  color: #2700ff;
  font-family: Roboto, sans-serif;
`;

export const Line = styled.hr``;

export const Container = styled.div`
  border: 1px solid transparent;
`;

export const ContainerRow = styled.div`
  margin: 10px;
  padding: 10px 20px;
`;

export const Card = styled.div`
  margin: auto;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 4px rgb(3 27 78 / 10%);
  width: 400px;
  height: 90vh;
  padding: 10px;
`;

export const Header = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
