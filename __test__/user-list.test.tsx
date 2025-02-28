import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import UserList from "../src/app/user-list";

describe("user list test suites", () => {
  const userList = [
    {
      name: "foo",
      email: "foo@gmail.com",
    },
    {
      name: "bar",
      email: "bar@gmail.com",
    },
  ];

  it("user list rendering test", () => {
    // react testing library 요소 찾기.
    // getByRole, queryByRole, findByRole
    // label, byText, placeholder, Role + {name: "value"}

    render(<UserList users={userList} />);

    const tbody = screen.getByTestId("user-list");

    // within -> 특정 요소의 자식중에서 찾기
    const rows = within(tbody).getAllByRole("row");

    expect(rows).toHaveLength(2);
  });

  it("query selector", () => {
    const { container } = render(<UserList users={userList} />);

    // DOM에 직접 접근해서 찾는 방식
    // react testing librarㄴㄴ -> DOM API 사용함
    const rows = container.querySelectorAll("tbody tr");

    expect(rows).toHaveLength(2);
  });
});
