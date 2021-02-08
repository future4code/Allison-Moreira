import {
  FormMain,
  FormDiv,
  Text,
  Input,
  Button,
} from "../../assets/styled/LoginStyled";
import { goToLoginUserPage, goToHomePage } from "../../routes/Coordinator";

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

  const RegisterUserForm = (event) => {
    event.preventDefault();

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
        history.push("/login");
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
      <FormDiv
        shadow="0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%)"
        width="100vh"
        margin="auto"
      >
        <Button
          bgColor="transparent"
          bgHover="transparent"
          padding="0"
          color="black"
          onClick={() => goToHomePage(history)}
        >
          {" "}
          INICIO
        </Button>
        
        <Text fontSize="42" bold="bold" color="rgb(234,29,44)">
          Vamos viajar ao além ...
        </Text>
        <Text fontSize="18">Informe o seu e-mail e senha para continuar</Text>

        <form onSubmit={RegisterUserForm}>
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
            title="Ops! Campo de senha precisa ter mínimo 6 caracteres"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={onChangePassword}
          />

          <Button>Cadastrar</Button>
        </form>

        <Text border="1px solid #000" color="red" padding="2px">
         {infoError}
        </Text>

        <Text>
          Já tenho conta!{" "}
          <button onClick={() => goToLoginUserPage(history)}>
            {" "}
            Acessar agora!
          </button>{" "}
        </Text>
      </FormDiv>
    </FormMain>
  );
}

export default FormRegister;
