import { lazyImport } from "@/utils/lazyImport";
import storage from "@/utils/storage";
import { Navigate } from "react-router-dom";

const { Login } = lazyImport(
  () => import("@/features/auth/LoginPage"),
  "Login"
);

// TODO refactor
const navigateTo = () => {
  const authInfo = storage.getAuthInfo();
  return authInfo ? <Navigate to={"/app/following"} /> : <Login />;
};

export const publicRoutes = [
  { path: "/app/login", element: <Login /> },
  { path: "/*", element: navigateTo() },
];
