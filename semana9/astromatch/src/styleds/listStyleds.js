import styled from "styled-components";

export const Main = styled.div`
  height: 70vh;
  margin: 5vh 2vh;
`;

export const Cards = styled.div`
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgb(3 27 78 / 10%);
  cursor: pointer;
  height: 12vh;
  margin: 10px;
  color: black;
  transition: border-radius ease 0.2s;

  :hover {
    background-color: blueviolet;
    color: #fff;
    border-radius: 20px;
    /* height: 15vh; */
    transition: height ease 0.9s;
    transition: border-radius ease 0.2s;
  }

  :active {
    background: #1f1f1f;
  }
`;
