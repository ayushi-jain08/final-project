import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Context/ProductContext";

import { FilterContextProvider } from "./Context/Filter_context";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { CartProvider } from "./Context/Cart_Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <CartProvider>
        {/* <FilterContextProvider> */}
        <UserAuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserAuthContextProvider>
      </CartProvider>
      {/* </FilterContextProvider> */}
    </AppContextProvider>
  </React.StrictMode>
);
