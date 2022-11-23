import { lazyImport } from "@/utils/lazyImport";
import { Navigate } from "react-router-dom";

const { Login } = lazyImport(() => import("@/features/auth/Login"), "Login");

export const publicRoutes = [
  { path: "/app/login", element: <Login /> },
  { path: "/*", element: <Navigate to="/app/login" /> },
];
