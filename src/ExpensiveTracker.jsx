import { useState } from "react";
import Table from "./Table";

const ExpensiveTracker = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [expensiveDetails, setExpensiveDetails] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    setExpensiveDetails([...expensiveDetails, { title: title, count: count }]);
    setTitle("");
    setCount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      <br></br>
      <br></br>
      <button type="submit">Add</button>

      <Table expensiveDetails={expensiveDetails} />
    </form>
  );
};

export default ExpensiveTracker;
