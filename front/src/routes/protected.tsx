import { lazyImport } from "@/utils/lazyImport";

const { Following } = lazyImport(
  () => import("@/features/following/Following"),
  "Following"
);

export const protectedRoutes = [
  { path: "/app/following", element: <Following /> },
];
