import { Copyright } from "@/components/CopyRight";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { LoginForm } from "./components/LoginForm";

export const Login = () => {
  return (
    <PublicLayout>
      <LoginForm />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </PublicLayout>
  );
};
