import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const isLoading = false;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App isLoading={isLoading} />
  </StrictMode>
);
