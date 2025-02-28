import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { ColorList, LodableColorList } from "../src/app/different-queries/page";

describe("different query test suites", () => {
  it("getByRole, queryByRole , findByRole", async () => {
    render(<ColorList />);

    // ul role -> list

    // getByRole -> 있는 요소를 찾을때
    // 요소를 못찾으면 에러를 던짐.
    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();

    // queryByRole ->  없는 것을 확인할때.
    // 요소를 못찾으면 null을 반환
    const ul2 = screen.queryByRole("list");
    expect(ul2).toBeInTheDocument();

    // findByRole 요소가 없을때 promise reject
    const ul3 = await screen.findByRole("list");
    expect(ul3).toBeInTheDocument();
  });

  it("getByRole, queryByRole, findByRole 요소를 못 찾을때", async () => {
    render(<ColorList />);

    // 있을수도 있고, 없을 수도 있고
    // 요소가 없어야하는 경우

    const queryByRole = screen.queryByRole("button");
    expect(queryByRole).toBeNull();

    await expect(screen.findByRole("button")).rejects.toThrow();

    expect(() => screen.getByRole("button")).toThrow();
  });

  it("getAllByRole, queryAllByRole, findAllByRole 요소가 있을때", async () => {
    render(<ColorList />);
    // li -> listitem

    const getAllByRole = screen.getAllByRole("listitem");
    expect(getAllByRole).toHaveLength(3);

    const queryAllByRole = screen.queryAllByRole("listitem");
    expect(queryAllByRole).toHaveLength(3);

    const findAllByRole = await screen.findAllByRole("listitem");
    expect(findAllByRole).toHaveLength(3);
  });

  it("getAllByRole, queryAllByRole, findAllByRole 요소가 없을 때", async () => {
    // getAllByRole -> 에러를 던짐
    expect(() => screen.getAllByRole("button")).toThrow();

    // queryAllByRole -> 빈 배열 반환
    expect(screen.queryAllByRole("button")).toHaveLength(0);

    // findAllByRole -> promise reject
    await expect(screen.findAllByRole("button")).rejects.toThrow();
  });
});

describe("loadable color list test suites", () => {
  it("화면에 렌더링", async () => {
    // 데이터페칭을 해서 상태에 데이터를 저장하고 UI를 렌더링
    render(<LodableColorList />);

    // screen useEffect을 기다림 콜백 함수에서는 동기적으로 요소찾기 가능
    await waitFor(() => {
      const listItem = screen.getAllByRole("listitem");
      expect(listItem).toHaveLength(3);
    });
    screen.debug();

    const listItem = await screen.findAllByRole("listitem");

    expect(listItem).toHaveLength(3);
  });
});
