import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Header component", () => {
  render(<Header />);
  const linkElement = screen.getByText(/See DevOps Lab/i);
  expect(linkElement).toBeInTheDocument();
});
