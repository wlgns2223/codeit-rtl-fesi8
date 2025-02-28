import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "../src/app/counter/counter";
import User from "@testing-library/user-event";

describe("counter test suites", () => {
  it("document title 변경 테스트", async () => {
    const title = "codeit";
    document.title = title;

    // 버튼을 1번 클릭을 한다.
    // count += 1.  0 -> 1
    // 체크박스를 누른다.
    // document.title = `Total number of clicks: 1`
    // 체크박스를 한번 더 누른다.
    // document.title = `codeit`

    render(<Counter />);

    const button = screen.getByRole("button");
    await User.click(button);

    const checkbox = screen.getByRole("checkbox");
    await User.click(checkbox);

    expect(document.title).toBe(`Total number of clicks: 1`);

    await User.click(checkbox);
    expect(document.title).toBe(title);
  });

  it("rendering test", () => {
    render(<Counter />);

    const span = screen.getByTestId("count");
    const button = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");

    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });
});
