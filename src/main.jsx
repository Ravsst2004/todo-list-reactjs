import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/layouts/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddPage from "./pages/AddPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <RouterProvider router={router} />
  </>
);
