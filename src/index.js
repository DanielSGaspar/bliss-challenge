import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import QuestionList from "./components/Questions/QuestionList";
import QuestionDetail from "./components/Questions/QuestionDetail";


const el = document.getElementById('root');
const root = createRoot(el);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/questions",
    element: <QuestionList />
  },
  {
    path: "/question",
    element: <QuestionDetail />
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
