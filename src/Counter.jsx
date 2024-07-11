/* eslint-disable react/prop-types */
import CounterHoc from "./CounterHOC";

const Counter = ({ Count, Increment, Decrement }) => {
  return (
    <>
      <h1 style={{ color: "black" }}>Count : {Count}</h1>
      <h1 onClick={Increment}>Increment</h1>
      <h1 onClick={Decrement}>Decrement</h1>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CounterHoc(Counter);
