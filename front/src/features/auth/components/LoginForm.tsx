import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/app/following");
  };

  return (
    <Box
      sx={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h3">
        hinotori
      </Typography>
      <Box component="form" noValidate sx={{ my: 1 }} onSubmit={handleLogin}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="メールアドレス"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="パスワード"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="ログイン情報を保存する"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          ログイン
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              パスワードを忘れた場合
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              新規会員登録はこちら
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
