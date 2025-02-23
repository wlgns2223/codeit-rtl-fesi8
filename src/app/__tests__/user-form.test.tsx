import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import User from "@testing-library/user-event";
import Page from "../page";
import UserForm from "../user-form";

describe("Page", () => {
  it("should render without crashing", () => {
    render(<Page />);
    // redner component

    // Manipulate the component or find elements

    // assert

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should test UserForm", () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it("onUserAdd", async () => {
    // Not Best Implementation
    const argList: any[] = [];
    const callback = (...arg: any) => argList.push(arg);
    render(<UserForm onUserAdd={callback} />);

    const [nameInput, emailInput] = screen.getAllByRole("textbox");
    User.click(nameInput);
    await User.keyboard("John Doe", { delay: 100 });

    User.click(emailInput);
    await User.keyboard("email@gmail.com", { delay: 100 });

    const button = screen.getByRole("button");
    await User.click(button);

    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({
      name: "John Doe",
      email: "email@gmail.com",
    });
  });
  it("mocking onUserAdd", async () => {
    // Not Best Implementation
    const mock = jest.fn();
    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    User.click(nameInput);
    await User.keyboard("John Doe", { delay: 100 });

    User.click(emailInput);
    await User.keyboard("email@gmail.com", { delay: 100 });

    const button = screen.getByRole("button");
    await User.click(button);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith({
      name: "John Doe",
      email: "email@gmail.com",
    });
  });

  it("empties input fields after submit", async () => {
    render(<UserForm onUserAdd={() => {}} />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");

    await User.click(nameInput);
    await User.keyboard("foo", { delay: 100 });

    await User.click(emailInput);
    await User.keyboard("foo@gmail.com", { delay: 100 });

    await User.click(button);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
