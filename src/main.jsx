import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Info from "./Info.jsx";

import PackingList from "./Example.jsx";
import List from "./Example-2.jsx";

import TodoList from "./keys.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <List />
  </>
);
