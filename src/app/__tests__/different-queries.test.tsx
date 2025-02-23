import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ColorList, LodableColorList } from "../different-queries/page";

describe("different queries", () => {
  it("get by, queryby, find by zero found", async () => {
    render(<ColorList />);

    expect(() => screen.getByRole("textbox")).toThrow();
    expect(screen.queryByRole("textbox")).toBeNull();
    await expect(screen.findByRole("textbox")).rejects.toThrow();
  });

  it("getBye, queryBye, findBy single element", async () => {
    render(<ColorList />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryByRole("list")).toBeInTheDocument();
    // expect(await screen.findByRole("list")).toBeInTheDocument();
    await expect(screen.findByRole("list")).resolves.toBeInTheDocument();
  });

  it("get by, queryby, find by multiple listitem found", async () => {
    render(<ColorList />);

    expect(() => screen.getByRole("listitem")).toThrow();
    expect(() => screen.queryByRole("listitem")).toThrow();
    await expect(screen.findByRole("listitem")).rejects.toThrow();
  });

  it("getAllby , queryAllBy, findAllBy", async () => {
    render(<ColorList />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    const queryListItems = screen.queryAllByRole("listitem");
    expect(queryListItems).toHaveLength(3);

    const findAllListItems = await screen.findAllByRole("listitem");
    expect(findAllListItems).toHaveLength(3);
  });

  it("getBy, queryBy 차이", () => {
    render(<ColorList />);

    /**
     * getByRole은 해당 엘리먼트가 없으면 에러를 발생시킨다.
     */
    // const element = screen.getByRole("textbox");

    /**
     * 의미없는 구문이 된다.
     * Arrange 부분을 바꿔도 에러가 발생하지 않는다. -> 테스트가 의미가 없다.
     */
    // expect(element).toBeInTheDocument();

    const element = screen.queryByRole("textbox");
    expect(element).not.toBeInTheDocument();
  });

  it("findBy", async () => {
    /**
     * 비동기 코드를 실행하는 컴포넌트
     */
    render(<LodableColorList />);

    /**
     * 잠깐의 차이로 인해 li가 렌더링 안됌
     */
    const elems = await screen.findAllByRole("listitem");

    expect(elems).toHaveLength(3);
  });
});
