import { render, screen } from "@testing-library/react";
import Test from "../components/Test";

test("renders test paragraphs", () => {
  render(<Test />);

  const firstParagraph = screen.getByText("This is a test paragraph.");
  const secondParagraph = screen.getByText("This is another test paragraph.");

  expect(firstParagraph).toBeInTheDocument();
  expect(secondParagraph).toBeInTheDocument();
});
