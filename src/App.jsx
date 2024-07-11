import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
// import axios from "axios";
// import useCounter from "./useCounter";
// import Form from "./Form";
// import DateCalculator from "./DateCalculator";
import AuthProvider from "./AuthContext";
import useCounter from "./useCounter";
import DateCalculator from "./DateCalculator";
import { Suspense, lazy } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import Form from "./Form";
import ExpensiveTracker from "./ExpensiveTracker";
import Input from "./Input";
import Checkbox from "./Checkbox";

// import useCounter from "./useCounter";
const LazyLoading = lazy(() => import("./ReactLazy"));

function App() {
  // const [count, increment, decrement] = useCounter();
  const [name, setName] = useState("John");
  const [count, setCount] = useState(0);

  const arr = ["one", "two", "three"];

  return (
    <div className="App">
      {/* <h1>Welcome to My App</h1>
      <ReactMemo name={name} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setName('Doe')}>Change Name</button> */}
      <Checkbox />
    </div>
  );
}

export default App;
