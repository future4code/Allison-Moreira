import { ModalMain } from "../../assets/styled/ModalStyled";
import DataPersonalPage from "../../pages/DataPersonalPage/DataPersonalPage";

export const Modal = ({ showModal, setShowModal, openModal }) => {
  return (
    <>
      {showModal ? (
        <ModalMain>
          <button onClick={() => openModal((prev) => !prev)}>&times;</button>
          <DataPersonalPage />
          <button onClick={() => openModal((prev) => !prev)}>Close</button>
        </ModalMain>
      ) : null}{" "}
    </>
  );
};
