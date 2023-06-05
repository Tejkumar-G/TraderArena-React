import { useDispatch, useSelector } from "react-redux";
import StrategyCard from "./StrategyCard";
import "./style.scss";
import { useEffect } from "react";
import { getStrategies } from "../../api/strategy";

// const strategies = [
//   {
//     name: "strategy 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?",
//   },
//   {
//     name: "strategy 2",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?",
//   },
//   {
//     name: "strategy 3",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?",
//   },
//   {
//     name: "strategy 4",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?",
//   },
// ];

const Strategies = () => {
  const dispatch = useDispatch();
  const { strategies } = useSelector((state) => state.strategy);
  useEffect(() => {
    dispatch(getStrategies({ page: 1, per_page: 20 }));
  }, []);

  return (
    <div className="strategy-container">
      {strategies.map((item) => (
        <StrategyCard key={item.id} strategy={item} />
      ))}
    </div>
  );
};

export default Strategies;
