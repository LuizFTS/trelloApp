import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ListContextProvider } from "./context/ListContext.jsx";
import { TaskDetailModalContextProvider } from "./context/TaskDetailModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskDetailModalContextProvider>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </TaskDetailModalContextProvider>
  </React.StrictMode>
);
