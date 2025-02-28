import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UpperInput from "../src/app/upper-input/upper-input";
import User from "@testing-library/user-event";

describe("upper input test suites", () => {
  it("upper input", async () => {
    render(<UpperInput />);

    const input = screen.getByRole<HTMLInputElement>("textbox");
    const text = "stuff";

    await User.click(input);
    await User.keyboard(text);

    expect(input.value).toBe(text.toUpperCase());
  });
});
