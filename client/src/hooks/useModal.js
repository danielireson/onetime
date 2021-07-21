import { useContext } from "react";
import Message from "../components/Message";
import { ModalContext } from "../contexts/ModalContext";

export default function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("'useModal' must be used within a 'ModalProvider'");
  }

  const { modal, showModal, hideModal } = context;

  const showMessageModal = (message) =>
    showModal(<Message message={message} onClose={hideModal} />);

  const showAlertModal = (message) => showModal(<Message message={message} />);

  return { modal, showMessageModal, showAlertModal, hideModal };
}
