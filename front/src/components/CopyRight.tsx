import { Link, Typography } from "@mui/material";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        tamaki_tech
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
