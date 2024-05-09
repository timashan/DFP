import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./components/provider";

import App from "./App";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
