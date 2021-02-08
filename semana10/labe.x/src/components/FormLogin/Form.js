import { FormMain, FormDiv, Text, Input, Button } from "../../../assets/styled/LoginStyled";

function useFormPage() {
    return (
        <FormMain margin="0 33%">
    <FormDiv
      shadow="0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%)"
      width="80vh"
    >
      <Button bgColor="transparent" bgHover="transparent" padding="0" color="black" onClick={() => goToHomePage(history)}>  HOME</Button> 
      <Text fontSize="42" bold="bold" color="rgb(234,29,44)">
        {Title}
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
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />

        <Button>ENTRAR</Button>
      </form>

      <Text bgColor="#000" color="red" padding="8px">
        Error: {infoError}
      </Text>

      
    </FormDiv>
  </FormMain>
    )
}