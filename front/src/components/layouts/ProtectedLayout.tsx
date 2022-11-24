import { AppBar, Box, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

const theme = createTheme();

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box position="static">
        <AppBar position="absolute">
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            sx={{ m: 2 }}
          >
            hinotori
          </Typography>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProtectedLayout;
