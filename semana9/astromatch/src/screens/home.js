import React, { useState } from "react";
import Header from "../components/header";
import GetApiProfile from "../services/getProfile";
import GetApiMatch from "../services/getMatch";
import {
  Main,
  Container,
  ContainerRow,
  Card,
  Line,
} from "../styleds/homeStyleds";

function App() {
  const [selectPage, setSelectPage] = useState("GetApiProfile");

  const renderSelect = () => {
    switch (selectPage) {
      case "GetApiProfile":
        return <GetApiProfile />;
      case "GetApiMatch":
        return <GetApiMatch />;
      default:
        return <GetApiProfile />;
    }
  };

  const goToPageProfile = () => {
    setSelectPage("GetApiProfile");
  };

  const goToPageMatch = () => {
    setSelectPage("GetApiMatch");
  };

  return (
    <Main>
      <Container>
        <ContainerRow>
          <Card>
            <Header goToPageProfile={goToPageProfile} goToPageMatch={goToPageMatch} />
            <Line />
            {renderSelect()}
          </Card>
        </ContainerRow>
      </Container>
    </Main>
  );
}

export default App;
