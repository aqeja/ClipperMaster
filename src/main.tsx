import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./router";
import "./index.css";
const container = createRoot(document.getElementById("root")!);

container.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
