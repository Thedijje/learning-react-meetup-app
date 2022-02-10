import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { FavouriteContextProvider } from "./store/favourite-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContextProvider>,
  document.getElementById("root")
);
