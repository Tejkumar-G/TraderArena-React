import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { getStrategy } from "../../api/strategy";
import DeleteButton from "./DeleteButton";

const strategy = {
  id: 1,
  name: "strategy 1",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint, aspernatur doloribus a consequatur recusandae praesentium voluptatibus enim laudantium quaerat soluta, cupiditate sapiente, quasi culpa expedita consequuntur asperiores maxime illum?",
};

const ViewStrategy = () => {
  const { currentStrategy } = useSelector((state) => state.strategy);
  const { userDetails } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const actionAccess = location.state?.actionAccess;
  console.log(location.state);
  const { id } = useParams();
  console.log("currentStrategy: ", currentStrategy);
  useEffect(() => {
    console.log(id);
    dispatch(getStrategy(id));
  }, [id]);

  const editHandler = () => {
    navigate(`/strategy/edit/${id}`);
  };
  return (
    <>
      <Box>
        {currentStrategy?.user_id === userDetails.id ? (
          <Stack direction="row-reverse" spacing={2} marginRight={4}>
            <DeleteButton strategyId={id} />
            <Button
              variant="contained"
              color="warning"
              startIcon={<EditIcon />}
              onClick={editHandler}
            >
              Edit
            </Button>
          </Stack>
        ) : null}
        <Grid container justifyContent="center">
          <Grid item>
            <Box width={500} gap={2}>
              <Typography variant="h5" marginBottom={2}>
                {currentStrategy.name}
              </Typography>
              <Typography variant="body2" fontSize={16}>
                {currentStrategy.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ViewStrategy;
