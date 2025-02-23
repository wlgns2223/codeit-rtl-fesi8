import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import Matcher from "../matcher/page";

describe("matcher", () => {
  it("form안에 있는 버튼들 찾기", () => {
    render(<Matcher />);

    const form = screen.getByRole("form");

    /**
     * screen에 있는 모든 button을 찾음
     */
    // const buttons = screen.getAllByRole("button");
    // expect(buttons).toHaveLength(2);
    // expect(form).toBeInTheDocument();

    const buttons = within(form).getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });
});
