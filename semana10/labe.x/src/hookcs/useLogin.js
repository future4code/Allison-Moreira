import useForm from "./useForm";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useProtectedPage } from "./useProtectedPage";
import UseLogoutPages from "./useLogout";

export default function useLogin(byProtected) {
  const [infoError, setInfoError] = useState("");
  const [form, onChange] = useForm({});

  const history = useHistory();

  const Login = (event, Route) => {
    event.preventDefault();
    // useProtectedPage(Route)

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (form.email === "astrobot.admin@gmail.com" || form.email === "labenu.admin@gmail.com") {
          history.push("/Admin/Home");
        } else {
          history.push("/");
        }

      })
      .catch((err) => {
        if (form.email === "" && form.password === "") {
          setInfoError(
            "Ops! os campos de Email e Senha estão vazios, preencha para continuar "
          );
        } else if (form.password === "") {
          setInfoError(
            "Campo de SENHA está vazio, preencha este campo para continuar."
          );
        } else if (form.email === "") {
          setInfoError(
            "Campo E-MAIL está vazio, preencha este campo para continuar."
          );
        } else {
          setInfoError(err.response.data.message);
        }
      });
  };

  return [infoError, onChange, form, Login];
}
