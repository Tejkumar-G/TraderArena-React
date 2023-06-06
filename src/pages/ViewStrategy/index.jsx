import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import DeleteButton from "./DeleteButton";

const strategy = {
  id: 1,
  name: "strategy 1",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint, aspernatur doloribus a consequatur recusandae praesentium voluptatibus enim laudantium quaerat soluta, cupiditate sapiente, quasi culpa expedita consequuntur asperiores maxime illum?",
};

const ViewStrategy = ({ actionAccess = true }) => {
  const { currentStrategy } = useSelector((state) => state.strategy);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("currentStrategy: ", currentStrategy);
  //   useEffect(() => {
  //     console.log(id);
  //     dispatch(getStrategy(id));
  //   }, [id]);
  const editHandler = () => {
    navigate(`/strategy/edit/${id}`);
  };
  return (
    <>
      <Box>
        {actionAccess ? (
          <Stack direction="row-reverse" spacing={2} marginRight={4}>
            <DeleteButton />
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
                {strategy.name}
              </Typography>
              <Typography variant="body2" fontSize={16}>
                {strategy.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ViewStrategy;
