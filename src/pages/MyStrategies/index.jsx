import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getMyStrategies } from "../../api/strategy";
import StrategyCard from "../../components/StrategyCard";
import { Paths } from "../../shared/constants";
import "./myStrategies.scss";
// const strategies = [
//   {
//     id: 1,
//     name: "strategy 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint, aspernatur doloribus a consequatur recusandae praesentium voluptatibus enim laudantium quaerat soluta, cupiditate sapiente, quasi culpa expedita consequuntur asperiores maxime illum?",
//   },
//   {
//     id: 2,
//     name: "strategy 2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint, aspernatur doloribus a consequatur recusandae praesentium voluptatibus enim laudantium quaerat soluta, cupiditate sapiente, quasi culpa expedita consequuntur asperiores maxime illum?",
//   },
//   {
//     id: 3,
//     name: "strategy 3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint, aspernatur doloribus a consequatur recusandae praesentium voluptatibus enim laudantium quaerat soluta, cupiditate sapiente, quasi culpa expedita consequuntur asperiores maxime illum?",
//   },
// ];

const MyStrategies = () => {
  const { myStrategies } = useSelector((state) => state.strategy);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("myStrategies: ", myStrategies);
  useEffect(() => {
    dispatch(getMyStrategies({ page: 1, per_Page: 10 }));
  }, []);

  const openStrategyHandler = (strategyId) => {
    navigate(`/strategy/${strategyId}`);
  };

  return (
    <div className="my-strategy-page">
      <div className="create-button">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate(Paths.New_Strategy_Page)}
        >
          create strategy
        </Button>
      </div>
      <div className="strategy-container">
        {myStrategies?.map((item) => (
          <StrategyCard
            key={item.id}
            strategy={item}
            handleClick={openStrategyHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MyStrategies;
