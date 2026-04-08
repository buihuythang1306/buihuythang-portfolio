import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";

export default function DemoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
}