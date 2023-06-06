import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateStrategy } from "../../api/strategy";
import StrategyForm from "../../components/StrategyForm";

const EditStrategy = () => {
  const { currentStrategy } = useSelector((state) => state.strategy);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    console.log(data);
    dispatch(updateStrategy(currentStrategy?.id, data));
    navigate(-1);
  };

  return (
    <div className="new-strategy-page">
      <StrategyForm
        handleSubmit={submitHandler}
        editMode={true}
        editData={currentStrategy}
      />
    </div>
  );
};

export default EditStrategy;
