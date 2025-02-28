import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "../src/app/form/page";

describe("form test suites", () => {
  it("heading 찾기", () => {
    render(<Form />);

    // const heading = screen.getByRole("heading", { level: 3 });
    // const heading = screen.getByText("Enter Data");
    // //i -> 대소문자를 구분하지 않는다.
    const heading = screen.getByText(/enter/i);
    expect(heading).toBeInTheDocument();
  });

  it("image 찾기", () => {
    render(<Form />);
    // const img = screen.getByRole("img");
    const img = screen.getByAltText("data");
    expect(img).toBeInTheDocument();

    // data-testid????
    // testId은 React Testing Library에서 사용하는 특별한 dataset 속성임.
    // testId 왠만하면 쓰면 안됌
    const imageWrapper = screen.getByTestId("image wrapper");
    expect(imageWrapper).toBeInTheDocument();
  });

  it("input 찾기", () => {
    render(<Form />);

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const colorInput = screen.getByPlaceholderText(/red/i);
    expect(colorInput).toBeInTheDocument();
  });

  it("button 찾기", () => {
    render(<Form />);
    // const button = screen.getByRole("button");
    const button = screen.getByTitle(/click/i);
    expect(button).toBeInTheDocument();
  });
});
