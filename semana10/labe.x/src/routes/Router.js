import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import TravelPage from "../pages/TravelPage/TravelPage";
import RegisterUserPage from "../pages/RegisterUserPage/RegisterUserPage";
import FaqPage from "../pages/FaqPage/FaqPage";
import LoginPage from "../pages/LoginUserPage/LoginUserPage";
import Header from "../components/Header/Header";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import AdminHomePage from "../pages/Admin/HomePage/AdminHomePage";
import AdminCreateTripPage from "../pages/Admin/CreateTripPage/CreateTripPage";
import TravelDetailPage from "../pages/TravelPage/TravelDetailPage";
import DataPersonalPage from "../pages/DataPersonalPage/DataPersonalPage";

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

        <Route exact path="/viagens/id/:id">
          <Header />
          <TravelDetailPage />
        </Route>

        <Route exact path="/dados-pessoais">
          <Header />
          <DataPersonalPage />
        </Route>

        <Route exact path="/cadastro">
          <RegisterUserPage />
        </Route>

        <Route exact path="/duvidas-frequentes">
          <Header />
          <FaqPage />
        </Route>

        <Route exact path="/error">
          <ErrorPage />
        </Route>

        {/* PARTE ADMINISTRATIVA */}

        <Route exact path="/Admin/">
          <AdminHomePage />
        </Route>

        <Route exact path="/Admin/Home">
          <HeaderAdmin />
          <AdminCreateTripPage />
        </Route>

        <Route exact path="/Admin/CreateTrip">
          <HeaderAdmin />
          <AdminCreateTripPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
