import { render, screen } from "../testUtils";
import ErrorScreen from "./ErrorScreen";

it("renders correctly", async () => {
  // when
  render(<ErrorScreen />);

  // then
  expect(screen.getByTestId("message-text")).toBeInTheDocument();

  expect(screen.getByTestId("message-button")).toBeInTheDocument();
});
