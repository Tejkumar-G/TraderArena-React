import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createStrategy } from "../../api/strategy";
import StrategyForm from "../../components/StrategyForm";
import { Paths } from "../../shared/constants";
import './NewStrategy.scss'

const NewStrategy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    console.log(data);
    dispatch(createStrategy(data));
    navigate(Paths.My_Strategies_Page);
  };

  return (
    <div className='new-strategy-page'>
      <StrategyForm handleSubmit={submitHandler} />
    </div>
  );
};

export default NewStrategy;
