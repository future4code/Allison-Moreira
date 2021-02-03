import {
  FormMain,
  FormDiv,
  Text,
  Input,
  Button,
} from "../../assets/styled/LoginStyled";

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function FormRegister() {
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

  const RegisterUserForm = (ErrorPage) => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/signup",
        body
      )
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        console.log("Validar se já existe o login");
        console.log("Validar sobre os caracteres");
        history.push("/login");
      })
      .catch((err) => {
        console.log("validar form null ou vazio")
        setInfoError(err.response.data.message)
      });
  };

  return (
    <FormMain>
      <FormDiv
        shadow="0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%)"
        width="100vh"
        margin="auto"
      >
        <Text fontSize="42" bold="bold" color="rgb(234,29,44)">
          Vamos viajar ao além ...
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
        <Button onClick={() => RegisterUserForm()}>Cadastrar</Button>
        <Text bgColor="#000" color="red" padding="8px"> Mostrar e Remover {infoError}</Text>

        <Text>
          Já tenho conta! <a href="/login"> Acessar agora!</a>{" "}
        </Text>
      </FormDiv>
    </FormMain>
  );
}

export default FormRegister;
