import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import TravelPage from "../pages/TravelPage/TravelPage";
import RegisterUserPage from "../pages/RegisterUserPage/RegisterUserPage";
import InscriptionTravelPage from "../pages/InscriptionTravelPage/InscriptionTravelPage";
import FaqPage from "../pages/FaqPage/FaqPage";
import LoginPage from "../pages/LoginUserPage/LoginUserPage";
import Header from "../components/Header/Header";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <App />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/viagens">
          <Header />
          <TravelPage />
        </Route>

        <Route exact path="/cadastro">
          <RegisterUserPage />
        </Route>

        <Route exact path="/inscreva-se">
          <InscriptionTravelPage />
        </Route>

        <Route exact path="/duvidas-frequentes">
          <Header />
          <FaqPage />
        </Route>

        <Route exact path="/error">
          <ErrorPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
