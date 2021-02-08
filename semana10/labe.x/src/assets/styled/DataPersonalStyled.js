import styled from 'styled-components'

export const PersonalMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0;
`
export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Input = styled.input`
    padding: 10px;
    margin: 5px;
`


export const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  background-color: ${props=>props.bgColor || '#000'};
  color: ${props=>props.color || 'white'};
  font-weight: bold;

  :hover {
    background-color: ${props=>props.bgHover || '#100'};
  }
`;

export const Text = styled.p`
    font-size: 42px;
`