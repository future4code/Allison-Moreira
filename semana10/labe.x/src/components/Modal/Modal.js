import { ModalMain, Button } from "../../assets/styled/ModalStyled";
import DataPersonalPage from "../../pages/DataPersonalPage/DataPersonalPage";

export const Modal = ({ showModal, setShowModal, openModal }) => {
  return (
    <>
      {showModal ? (
        <ModalMain>
          <Button 
          position="absolute"
          bgColor="transparent" color="red" onClick={() => openModal((prev) => !prev)}>&times; Fechar</Button>
          <DataPersonalPage />
          <Button onClick={() => openModal((prev) => !prev)}>Fechar</Button>
        </ModalMain>
      ) : null}{" "}
    </>
  );
};
