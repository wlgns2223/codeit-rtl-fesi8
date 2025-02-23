import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import User from "@testing-library/user-event";
import Home from "../page";

describe("app", () => {
  it("render app", async () => {
    render(<Home />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });

    await User.click(nameInput);
    await User.keyboard("foo", { delay: 100 });

    await User.click(emailInput);
    await User.keyboard("foo@gmail.com", { delay: 100 });

    const button = screen.getByRole("button");
    await User.click(button);

    // screen.debug();

    const name = screen.getByRole("cell", { name: "foo" });
    const email = screen.getByRole("cell", { name: "foo@gmail.com" });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
