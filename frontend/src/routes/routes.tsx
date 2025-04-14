import App from "@/App";
import { BoardPage, BoardsPage, IssuesPage } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/issues" /> },
      { path: "boards", element: <BoardsPage /> },
      { path: "issues", element: <IssuesPage /> },
      { path: "board/:id", element: <BoardPage /> },
    ],
  },
]);

export { router };
