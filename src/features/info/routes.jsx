import { Routes, Route } from "react-router-dom";
import InfoPage from "./pages/info-page";

export default function InfoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/*" element={<InfoPage />} />
    </Routes>
  );
}