import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { Star } from "lucide-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster />
  </>
);
