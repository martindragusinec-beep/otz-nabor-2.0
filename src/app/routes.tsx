import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

// Error Boundary Component
function ErrorBoundary() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Ups! Něco se pokazilo</h1>
      <p>Omlouváme se za potíže.</p>
      <a href="/" style={{ color: "#E30A1A", textDecoration: "underline" }}>
        Zpět na hlavní stránku
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/obchodnik",
    Component: Home,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/podminky-ochrany-osobnich-udaju",
    Component: PrivacyPolicy,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    Component: Home,
    errorElement: <ErrorBoundary />,
  },
]);