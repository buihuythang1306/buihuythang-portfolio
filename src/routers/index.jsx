import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import ErrorFallback from "@/components/common/error-page";
import PublicRoutes from "./public-routes";
import NotFoundPage from "@/components/common/notfound-page";

const RootLayout = () => (
  <Outlet />
);

const combinedRoutes = [...PublicRoutes];

combinedRoutes.push({ 
  path: "*", 
  element: <NotFoundPage /> 
});

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorFallback />,
    children: combinedRoutes.map((route) => ({
      ...route,
      errorElement: route.errorElement || <ErrorFallback />,
    })),
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;