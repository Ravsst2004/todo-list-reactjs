import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/layouts/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Home />
  </>
);
