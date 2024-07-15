import { render, screen, fireEvent } from "@testing-library/react";
import BMICalc from "../components/BMICalc";
// import "@testing-library/jest-dom/extend-expect";

test("renders the BMI Calculator component", () => {
  render(<BMICalc />);
  expect(screen.getByText(/Weight \(kg\):/i)).toBeInTheDocument();
  expect(screen.getByText(/Height \(m\):/i)).toBeInTheDocument();
  expect(screen.getByText(/Calculate BMI/i)).toBeInTheDocument();
});

test("calculates BMI correctly", () => {
  render(<BMICalc />);

  const weightInput = screen.getByLabelText(/Weight \(kg\):/i);
  const heightInput = screen.getByLabelText(/Height \(m\):/i);
  const button = screen.getByText(/Calculate BMI/i);

  fireEvent.change(weightInput, { target: { value: 70 } });
  fireEvent.change(heightInput, { target: { value: 1.75 } });

  fireEvent.click(button);

  expect(screen.getByText(/Your BMI is: 22.86/i)).toBeInTheDocument();
});

test("handles edge cases (zero height) gracefully", () => {
  render(<BMICalc />);

  const weightInput = screen.getByLabelText(/Weight \(kg\):/i);
  const heightInput = screen.getByLabelText(/Height \(m\):/i);
  const button = screen.getByText(/Calculate BMI/i);

  fireEvent.change(weightInput, { target: { value: 70 } });
  fireEvent.change(heightInput, { target: { value: 0 } });

  fireEvent.click(button);

  expect(screen.getByText(/Your BMI is: Infinity/i)).toBeInTheDocument();
});
