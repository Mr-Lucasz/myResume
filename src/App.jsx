import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import "./App.css";
import './i18n';



export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
