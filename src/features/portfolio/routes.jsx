import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/portfolio-page";

export default function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/*" element={<PortfolioPage />} />
    </Routes>
  );
}