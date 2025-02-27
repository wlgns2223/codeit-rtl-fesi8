import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserList from "../src/app/user-list";

describe("user list test suites", () => {
  it("user list rendering test", () => {
    render(<UserList users={[]} />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });
});
