import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFFFFF",
          borderRadius: 2,
        },
        components: {},
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
