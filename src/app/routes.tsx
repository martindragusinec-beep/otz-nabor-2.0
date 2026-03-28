import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/obchodnik" replace />,
  },
  {
    path: "/obchodnik",
    Component: Home,
  },
  {
    path: "/podminky-ochrany-osobnich-udaju",
    Component: PrivacyPolicy,
  },
]);