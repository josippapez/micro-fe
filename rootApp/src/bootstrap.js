import { StoreProvider } from "home/SharedStore";
import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import RootApp from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { persistor } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <PersistGate loading={null} persistor={persistor}>
        <RootApp />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
