import { useSelector, useDispatch } from "react-redux";
import Reset from "./Reset";

const minusCount = () => {
  return {
    type: "minus",
  };
};
function App() {
  const caunter = useSelector((state) => state);
  const dispatch = useDispatch();
  const plus = () => {
    dispatch({
      type: "plus",
      payload: 5,
    });
  };
  const minus = () => {
    dispatch(minusCount());
  };

  return (
    <div className="App">
      {caunter}
      <div>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
      </div>
      <Reset />
    </div>
  );
}

export default App;
