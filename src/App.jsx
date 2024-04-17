import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import "./App.module.css";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
