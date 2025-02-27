import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import UserForm from "../src/app/user-form";
import User from "@testing-library/user-event";

describe("Home 컴포넌트 테스트", () => {
  it("h1 태그 렌더링 테스트", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: "테스트" });

    expect(heading).toBeInTheDocument();
  });

  it("input 렌더링 테스트", () => {
    // Arrange
    render(<Home />);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });

  it("button 렌더링 테스트", () => {
    render(<Home />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
