import { LoginRequest } from "@/api/schemas";
import { AuthContext } from "@/providers/auth";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginRequest> = async (body: LoginRequest) => {
    await login(body);
    navigate("/app/following");
  };

  return (
    <Box
      component="form"
      sx={{ alignItems: "center" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="login_id"
        margin="normal"
        required
        fullWidth
        label="ログインID"
        {...register("login_id")}
      />
      <TextField
        id="password"
        margin="normal"
        required
        fullWidth
        label="パスワード"
        type="password"
        {...register("password")}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="ログイン情報を保存する"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        ログイン
      </Button>
    </Box>
  );
};
