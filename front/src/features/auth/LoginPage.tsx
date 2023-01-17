import { Copyright } from "@/components/CopyRight";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LoginForm } from "./components/LoginForm";
import { LoginFormFooterLinks } from "./components/LoginFormFooterLinks";

export const Login = () => {
  return (
    <PublicLayout>
      <Box
        sx={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3">
          hinotori
        </Typography>
        <LoginForm />
        <LoginFormFooterLinks />
        <Box sx={{ mt: 8, mb: 4 }}>
          <Copyright />
        </Box>
      </Box>
    </PublicLayout>
  );
};
