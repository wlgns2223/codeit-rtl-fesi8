import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Query, { Buttons, IconButtons, Inputs } from "../src/app/query/page";

describe("query 테스트", () => {
  it("여러가지 요소찾기", () => {
    render(<Query />);

    // a tag -> link
    const a = screen.getByRole("link");
    expect(a).toBeInTheDocument();

    // button -> button
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // footer -> contentinfo
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    // h1 ~ h6 -> heading
    // getAllbyRole -> length 3개인지 , h1, h2 ???
    // level 2, level 3..
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();

    // header -> banner
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    // img -> img
    // name -> accessible name 접근가능한 name
    // DOM에서 접근가능한 name이란? -> alt, aria-label, aria-labelledby, title
    // accessible name이란? -> DOM 시멘틱한 구조를 완성하는 텍스트
    const descriptionImage = screen.getByRole("img", { name: "description" });
    expect(descriptionImage).toBeInTheDocument();

    // input type='checkbox' -> checkbox
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    // input type='number' -> spinbutton
    const number = screen.getByRole("spinbutton");
    expect(number).toBeInTheDocument();

    // input type='radio' -> radio
    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();

    // input type='text' -> textbox
    const text = screen.getByPlaceholderText("normal-input");
    expect(text).toBeInTheDocument();

    // label -> codeit
    const codeitInput = screen.getByLabelText("codeit");
    expect(codeitInput).toBeInTheDocument();

    // li -> listitem
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();

    // ul -> list
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  // 같은 요소가 여러가지 있을 경우에, getBy*
  it("button 요소 찾기", () => {
    render(<Buttons />);

    // const submitButton = screen.getByRole("button", { name: "submit" });
    const submitButton = screen.getByText("submit");
    expect(submitButton).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: "cancel" });
    expect(cancelButton).toBeInTheDocument();

    const buttonGroup = screen.getByLabelText("buttonGroup");
    expect(buttonGroup).toBeInTheDocument();
  });

  it("Input 요소 찾기", () => {
    render(<Inputs />);

    const emailInput = screen.getByRole("textbox", { name: "email" });
    expect(emailInput).toBeInTheDocument();

    const searchInput = screen.getByLabelText("search");
    expect(searchInput).toBeInTheDocument();
  });

  it("iconsButton 요소 찾기", () => {
    render(<IconButtons />);

    const signInButton = screen.getByLabelText("sigin in");
    expect(signInButton).toBeInTheDocument();
  });
});
