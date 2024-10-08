import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{count}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: "INC" })}
          className="counter-button positive"
        >
          increase
        </button>
        <button
          onClick={() => dispatch({ type: "CLR" })}
          className="counter-button zero"
        >
          reset
        </button>
        <button
          onClick={() => dispatch({ type: "DEC" })}
          className="counter-button negative"
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
