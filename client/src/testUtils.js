import { render } from "@testing-library/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";

export * from "@testing-library/react";

function customRender(component, options) {
  const wrapper = ({ children }) => {
    return (
      <ThemeProvider>
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    );
  };

  render(component, {
    wrapper,
    ...options,
  });
}

export { customRender as render };
