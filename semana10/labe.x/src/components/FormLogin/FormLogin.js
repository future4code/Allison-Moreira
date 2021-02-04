import {
  FormMain,
  FormDiv,
  Text,
  Input,
  Button,
} from "../../assets/styled/LoginStyled";
import { useHistory } from "react-router-dom";
import {goToRegisterUser} from '../../routes/Coordinator'

import axios from "axios";
import { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const Login = () => {
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
        console.log("Ir para Home")
        console.log("Validar para não entrar no login de novo")
        history.push("/viagens")
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  return (
    <FormMain>
      <FormDiv width="110vh">Logo</FormDiv>
      <FormDiv
        shadow="0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%)"
        width="80vh"
      >
        <Text fontSize="42" bold="bold" color="rgb(234,29,44)">
          Falta pouco para viajar ao espaço!
        </Text>
        <Text fontSize="18">Informe o seu e-mail e senha para continuar</Text>

        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <Button onClick={() => Login()}>ENTRAR</Button>

        <Text>
          Novo na LabeX? <button onClick={() => goToRegisterUser(history)} >Crie uma conta.</button>
        </Text>
      </FormDiv>
    </FormMain>
  );
}

export default FormLogin;