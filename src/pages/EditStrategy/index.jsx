import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createStrategy } from "../../api/strategy";
import StrategyForm from "../../components/StrategyForm";
import { Paths } from "../../shared/constants";

const EditStrategy = () => {
  const { currentStartegy } = useSelector((state)=>state.strategy)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    console.log(data);
    // dispatch(createStrategy(data));
    // navigate(Paths.My_Strategies_Page);
  };

  return (
    <div className='new-strategy-page'>
      <StrategyForm handleSubmit={submitHandler} editMode={true} editData={currentStartegy}/>
    </div>
  );
};

export default EditStrategy;
