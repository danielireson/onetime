import { render, screen } from "../testUtils";
import HomeScreen from "./HomeScreen";

it("renders correctly", async () => {
  // when
  render(<HomeScreen />);

  // then
  expect(screen.getByTestId("logo")).toBeInTheDocument();

  expect(screen.getByTestId("shortcode-base-url")).toBeInTheDocument();

  expect(screen.getByTestId("shortcode-input")).toBeInTheDocument();

  expect(screen.getByTestId("shortcode-button")).toBeInTheDocument();

  expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
});
