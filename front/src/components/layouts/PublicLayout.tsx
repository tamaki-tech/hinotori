import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

type PublicLayoutProps = {
  children: React.ReactNode;
};

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">{children}</Container>
    </ThemeProvider>
  );
};
