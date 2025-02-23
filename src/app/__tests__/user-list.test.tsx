import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import UserList from "../user-list";

// recommended to use this approach
// rather than using before each
const renderComp = () => {
  const users = [
    {
      name: "foo",
      email: "foo@gmail.com",
    },
    {
      name: "bar",
      email: "bar@gmail.com",
    },
  ];

  const { container } = render(<UserList users={users} />);

  return {
    users,
  };
};

describe("user list ", () => {
  it("should render one row per a user", () => {
    // render component

    const users = [
      {
        name: "foo",
        email: "foo@gmail.com",
      },
      {
        name: "bar",
        email: "bar@gmail.com",
      },
    ];

    const { container } = render(<UserList users={users} />);

    // screen.logTestingPlaygroundURL();
    // 굳이 최적화된 쿼리를 찾으려고 하지마라
    // const rows = screen.getAllByRole("row");

    // 첫번째 솔루션
    // test-id로 찾기
    // const rows = within(screen.getByTestId("user-list")).getAllByRole("row");

    // 두번째 솔루션
    // CSS selector
    // role로 찾기 어려울때 query selector로 찾아도 된다.
    const rows = container.querySelectorAll("tbody tr");

    expect(rows).toHaveLength(2);

    // Manipulate the component or find elements
    // assert
  });

  it("should test user list", () => {
    const users = [
      {
        name: "foo",
        email: "foo@gmail.com",
      },
      {
        name: "bar",
        email: "bar@gmail.com",
      },
    ];

    render(<UserList users={users} />);

    for (let user of users) {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});
