import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // 앱의 루트 컴포넌트

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);