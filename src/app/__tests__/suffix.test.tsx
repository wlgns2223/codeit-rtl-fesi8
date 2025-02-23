import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "../form/page";

describe("query suffix", () => {
  it("query suffix", () => {
    render(<Form />);

    const elements: any[] = [
      screen.getByRole("button"),
      screen.getByLabelText("Email"),
      screen.getByPlaceholderText("Red"),
      screen.getByText(/enter/i),
      screen.getByText("Enter Data"),
      screen.getByAltText("data"),
      screen.getByTitle(/click when/i),
      screen.getByTitle("click when ready to submit"),
      screen.getByTestId("image wrapper"),
    ];

    for (const elem of elements) {
      expect(elem).toBeInTheDocument();
    }
  });
});
