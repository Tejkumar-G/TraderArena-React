import { useDispatch, useSelector } from "react-redux";
import StrategyCard from "./StrategyCard";
import "./strategies.scss";
import { useEffect } from "react";
import { getStrategies } from "../../api/strategy";

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
