import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Query, { Buttons, IconButtons, Inputs } from "../query/page";
describe("query test", () => {
  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "listitem",
    "list",
  ];
  it("should render without crashing", () => {
    render(<Query />);

    for (const role of roles) {
      const element = screen.getByRole(role);
      expect(element).toBeInTheDocument();
    }
  });

  it("should find only one button", () => {
    render(<Buttons />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    expect(cancelButton).toBeInTheDocument();
  });

  it("should find inputs", () => {
    render(<Inputs />);

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const searchInput = screen.getByRole("textbox", { name: /search/i });

    expect(emailInput).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("shuold find svg in button", () => {
    render(<IconButtons />);

    const signInButton = screen.getByRole("button", { name: /sigin in/i });
    const signOutButton = screen.getByRole("button", { name: /sign out/i });

    expect(signInButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });
});
