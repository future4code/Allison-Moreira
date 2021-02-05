import {
  FormMain,
  FormDiv,
  Text,
  Input,
  Button,
} from "../../assets/styled/LoginStyled";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToRegisterUser } from "../../routes/Coordinator";

import axios from "axios";
import { useState } from "react";
import { useProtectedPage } from '../../hookcs/useProtectedPage'

function FormLogin() {

  useProtectedPage("/")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoError, setInfoError] = useState("");
  const history = useHistory();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const Login = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("Ir para viagens");
        console.log("Validar para não entrar no login de novo");
        history.push("/viagens");
      })
      .catch((err) => {
        if (email === "" && password === "") {
          setInfoError(
            "Ops! os campos de Email e Senha estão vazios, preencha para continuar "
          );
        } else if (password === "") {
          setInfoError(
            "Campo de SENHA está vazio, preencha este campo para continuar."
          );
        } else if (email === "") {
          setInfoError(
            "Campo E-MAIL está vazio, preencha este campo para continuar."
          );
        } else {
          setInfoError(err.response.data.message);
        }
      });
  };

  return (
    <FormMain>
      <FormDiv width="110vh">Logo</FormDiv>
      <FormDiv
        shadow="0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%)"
        width="80vh"
      >
        <button onClick={() => goToHomePage(history)}>VOLTAR A HOME</button>
        <Text fontSize="42" bold="bold" color="rgb(234,29,44)">
          Falta pouco para viajar ao espaço!
        </Text>
        <Text fontSize="18">Informe o seu e-mail e senha para continuar</Text>

        <form onSubmit={Login}>
          <Input
            required
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            required
            pattern="[A-Za-z\d]{6,}$"
            title="Ops! Algo de errado!"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={onChangePassword}
          />

          <Button>ENTRAR</Button>
        </form>

        <Text bgColor="#000" color="red" padding="8px">
          Error: {infoError}
        </Text>

        <Text>
          Novo na LabeX?{" "}
          <button onClick={() => goToRegisterUser(history)}>
            Crie uma conta.
          </button>
        </Text>
      </FormDiv>
    </FormMain>
  );
}

export default FormLogin;
