import { useContext } from "react";
import MessageModal from "../components/MessageModal";
import { ModalContext } from "../contexts/ModalContext";

export default function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("'useModal' must be used within a 'ModalProvider'");
  }

  const { modal, showModal, hideModal } = context;

  const showMessageModal = (message) =>
    showModal(<MessageModal message={message} onClose={hideModal} />);

  return { modal, showMessageModal, hideModal };
}
