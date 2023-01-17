import { Grid, Link } from "@mui/material";

export const LoginFormFooterLinks = () => {
  return (
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
  );
};
