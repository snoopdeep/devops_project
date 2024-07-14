import { render, screen } from "@testing-library/react";
import Info from "../components/Info";

test("renders Info component", () => {
  render(<Info />);
  const linkElement = screen.getByText(/Devops lab/i);
  expect(linkElement).toBeInTheDocument();
});
