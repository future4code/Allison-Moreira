import {
  FormMain,
  FormDiv,
  Text,
  Input,
  Button,
} from "../../assets/styled/LoginStyled";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToRegisterUser } from "../../routes/Coordinator";
import { useProtectedPage } from "../../hookcs/useProtectedPage";
import useLogin from "../../hookcs/useLogin";

function FormLogin() {
  useProtectedPage("/viagens");

  const history = useHistory();
  const [infoError, onChange, form, Login] = useLogin();

  return (
    <FormMain>
      <FormDiv width="110vh">labe x</FormDiv>
      <FormDiv
        shadow="0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%)"
        width="80vh"
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
          Falta pouco para <br /> viajar ao espaço!
        </Text>
        <Text fontSize="18">Informe o seu e-mail e senha para continuar</Text>

        <form onSubmit={Login}>
          <Input
            required
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <Input
            required
            pattern="[A-Za-z\d]{6,}$"
            title="Ops! Algo de errado!"
            placeholder="Senha"
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
          />

          <Button>ENTRAR</Button>
          <Text border="1px solid #000" color="red" padding="2px">
            {infoError}
          </Text>
        </form>

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
