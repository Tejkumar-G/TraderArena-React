import { Typography } from "@mui/material";

const ErrorElement = (message) => {
  return (
    <Typography variant="caption" color="error" className="p-0 m-0">
      {message}
    </Typography>
  )
};

export default ErrorElement;
