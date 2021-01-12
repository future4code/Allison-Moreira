import react from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Form = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    gap: 10px;
    width: 25%;
    border: 1px solid green;
`

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
`

const Label = styled.label`

    margin: 10px;
`

const Input = styled.input`
    border: 1px solid gray;
    margin: 10px;
`

const Button  = styled.button`

    margin: 10px;
`

export default class Cadastros extends react.Component {
    state = {
        valorInputNome: "",
        valorInputEmail: "",
        mostrarListas: false
    }

    getNome = (event) => {
        this.setState({ valorInputNome: event.target.value });
    };

    getEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value });
    };

    exibirListar = () => {

        const body = {
            id: "",
            name: ""
        }

        const res = axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                  Authorization: "allison-marqs-epps"
                }
            }
        )

        res
        .then((resposta) => {
                
                console.log(body)
                alert("SUA LISTA");
            })
            .catch((erro) => {
                console.log(body)
                alert("Oppss! Não é possivel EXIBIR SUA LISTA");
            })

    }

    criarUser = () => {
        const body = {
          name: this.state.valorInputNome,
          email: this.state.valorInputEmail,
        };
    
        const request = axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          {
            headers: {
              Authorization: "allison-marqs-epps"
            }
          }
        )
    
        request
          .then((resposta) => {
              
            console.log(body)
            alert("Cadastro realizado com sucesso!");
          })
          .catch((erro) => {
              console.log(body)
            alert("Oppss! Não é possivel realizar o seu cadastro!");
          });
      };



    render() {
        return (
            <Form>
                <Div>
                    <Label>Nome:</Label>
                    <Input type="text"  onChange={this.getNome} value={this.state.valorInputNome}/>
                    <Label>E-mail:</Label>
                    <Input type="email" onChange={this.getEmail}  value={this.state.valorInputEmail}/>
                    <Button onClick={this.criarUser}>CADASTRAR</Button>
                    <Button onClick={this.exibirListar}>LISTA</Button>
                </Div>


            </Form>
        )
    }
}