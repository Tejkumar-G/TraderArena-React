import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import "./PageLoader.scss"
const PageLoader = () => {
  const { isLoading } = useSelector((state) => state.layout);
  return (
    <Backdrop
      className="backdrop"
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default PageLoader;
