import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/podminky-ochrany-osobnich-udaju",
    Component: PrivacyPolicy,
  },
]);
