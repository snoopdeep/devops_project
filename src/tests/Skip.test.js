import { render, screen } from "@testing-library/react";
import Skip from "../components/Skip";

test("renders Skip component", () => {
  render(<Skip />);
  const linkElement = screen.getByText(/This is a text/i);
  expect(linkElement).toBeInTheDocument();
});
