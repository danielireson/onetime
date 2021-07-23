import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../testUtils";
import TimerScreen from "./TimerScreen";

it("renders correctly", async () => {
  // given
  document.fullscreenEnabled = true;

  // when
  render(
    <MemoryRouter>
      <TimerScreen />
    </MemoryRouter>
  );

  // then
  expect(screen.getByTestId("timer")).toBeInTheDocument();

  expect(screen.getByTestId("timer-link")).toBeInTheDocument();

  expect(screen.getByTestId("timer-controls")).toBeInTheDocument();

  expect(screen.getByTestId("close-button")).toBeInTheDocument();

  expect(screen.getByTestId("fullscreen-button")).toBeInTheDocument();

  expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
});
