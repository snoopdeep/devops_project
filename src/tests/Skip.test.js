import { render, screen } from "@testing-library/react";
import Skip from "../components/Skip";

test("renders Skip component", () => {
  render(<Skip />);
  const linkElement = screen.getByText(/This is a group of 3 people/i);
  expect(linkElement).toBeInTheDocument();
});
