import ErrorFallback from "@/components/common/error-page";
import MainLayout from "@/components/layout/main-layout";
import FullPageLoader from "@/components/ui/full-page-loader";
import { path } from "@/constants/path";
import { lazy, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PortfolioRoutes = lazy(() => import("@/features/portfolio/routes"));
const DemoRoutes = lazy(() => import("@/features/demo/routes"));
const InfoRoutes = lazy(() => import("@/features/info/routes"));

const PublicLayoutWrapper = () => (
  <MainLayout>
    <Suspense fallback={<FullPageLoader />}>
      <Outlet />
    </Suspense>
  </MainLayout>
);

const PublicRoutes = [
  {
    path: path.Home,
    element: <PublicLayoutWrapper />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "",
        element: <PortfolioRoutes />,
      },
      {
        path: "*",
        element: <PortfolioRoutes />,
      },
    ],
  },
  {
    path: path.Demo,
    element: <PublicLayoutWrapper />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "",
        element: <DemoRoutes />,
      },
      {
        path: "*",
        element: <DemoRoutes />,
      },
    ],
  },
  {
    path: path.Info,
    element: <PublicLayoutWrapper />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "",
        element: <InfoRoutes />,
      },
      {
        path: "*",
        element: <InfoRoutes />,
      },
    ],
  },
];

export default PublicRoutes;