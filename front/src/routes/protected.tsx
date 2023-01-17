import { lazyImport } from "@/utils/lazyImport";
import storage from "@/utils/storage";
import { Login } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

const { Following } = lazyImport(
  () => import("@/features/following/Following"),
  "Following"
);

// TODO refactor
const navigateTo = () => {
  const authInfo = storage.getAuthInfo();
  return authInfo ? <Navigate to={"/app/following"} /> : <Login />;
};

export const protectedRoutes = [
  { path: "/app/following", element: <Following /> },
  { path: "/*", element: navigateTo() },
];
