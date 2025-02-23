import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import DataFetchingComponent from "./page";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";
import { setupServer, SetupServer } from "msw/node";

const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts/1", (req, res, ctx) => {
    return res(
      ctx.json({
        userId: 1,
        id: 1,
        title: "post title",
        body: "post body",
      })
    );
  }),
  rest.get("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
    return res(
      ctx.json({
        userId: 1,
        id: 1,
        title: "todo title",
        completed: false,
      })
    );
  }),
];

// request logging
// server.events.on("request:start", (req) => {
//   console.log(req);
// });

describe("data fetching test suite", () => {
  const server = setupServer(...handlers);
  const renderDataFetchingComponent = () => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: Infinity,
        },
      },
    });

    return render(
      <QueryClientProvider client={client}>
        <DataFetchingComponent />
      </QueryClientProvider>
    );
  };
  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("shuold render", () => {
    renderDataFetchingComponent();

    // expect(screen.getByRole("heading", { name: /data/i })).toBeInTheDocument();
  });

  it("msw mocking wait for", async () => {
    renderDataFetchingComponent();

    await waitFor(() => {
      expect(screen.getByText(/post title/i)).toBeInTheDocument();
      expect(screen.getByText(/todo title/i)).toBeInTheDocument();
    });
  });

  it("msw mocking findby ", async () => {
    renderDataFetchingComponent();

    screen.debug();

    const postBody = await screen.findByText(/body/i);
    expect(postBody).toBeInTheDocument();
    expect(postBody).toHaveTextContent("post body");

    const todoTitle = await screen.findByText(/todo title/i);
    expect(todoTitle).toBeInTheDocument();
    expect(todoTitle).toHaveTextContent("todo title");
  });
});
