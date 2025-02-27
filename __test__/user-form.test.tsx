import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserForm from "../src/app/user-form";
import User from "@testing-library/user-event";

describe("user form test", () => {
  it("input이 2개가 렌더링이 되어야한다.", () => {
    render(<UserForm />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);
  });

  it("submit 버튼이 렌더링이 되어야한다.", () => {
    render(<UserForm />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("User Form 테스트", async () => {
    // form submit을 했을때,
    // Callback 함수가 제대로 호출이 되었는지.
    // const dataList: any[] = [];
    // const callback = (args: any) => dataList.push(args);
    const callbackMock = jest.fn();
    render(<UserForm onUserAdd={callbackMock} />);

    // nodejs에 렌더링된 DOM에 접근을 해서 유저의 입력을 모방
    // input에 실제 값을 입력

    const inputs = screen.getAllByRole("textbox");
    const nameInput = inputs[0];
    User.click(nameInput);
    await User.type(nameInput, "test");

    const emailInput = inputs[1];
    User.click(emailInput);
    await User.type(emailInput, "email@email.com");

    const button = screen.getByRole("button");
    await User.click(button);

    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock).toHaveBeenCalledWith({
      name: "test",
      email: "email@email.com",
    });

    // expect(dataList).toHaveLength(1);
    // expect(dataList[0].name).toBe("test");
    // expect(dataList[0].email).toBe("email@email.com");
  });
});
