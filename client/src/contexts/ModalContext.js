import { useState, createContext } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState();

  const showModal = (component) => setModal(component);
  const hideModal = () => setModal(null);

  const context = {
    modal,
    showModal,
    hideModal,
  };

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
}
