import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

if (!container) throw new Error("Root container not found");

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
