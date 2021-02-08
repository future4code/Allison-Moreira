import styled from 'styled-components'

export const ModalMain = styled.div`
    position: absolute;
    background-color: white;
    color: red;
    padding: 50px;
    min-width: 600px;
    min-height: 400px;
    right: 46.666%; 
    left: 26.666%;
    top: 120px; 
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.2);
`
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
  position: ${props=>props.position};
  right: -200px;
  top: 0;

`