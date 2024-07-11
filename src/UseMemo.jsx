import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveCalculation = (num) => {
    console.log('called')
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return num * sum;
  };
  const doubleCount = useMemo(() => expensiveCalculation(count), [count]);
  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>Double Count: {doubleCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default UseMemo;
