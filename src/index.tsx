// vendors
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

// reports
import reportWebVitals from "./reportWebVitals";

// components
import App from "./App";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
