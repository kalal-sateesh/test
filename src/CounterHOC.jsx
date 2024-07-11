/* import { useState } from "react";

const CounterHOC = (OldCom) => {
  return function NewCom(props) {
    const [count, setCount] = useState(0);
    return (
      <OldCom
        {...props}
        count={count}
        Increment={() => {
          setCount(count + 1);
        }}
        Decrement={() => {
            setCount(count - 1);
          }}
      ></OldCom>
    );
  };
};

export default CounterHOC; */

import { useState } from "react";

const CounterHOC = (OldCom) => {
  return function NewCom(props) {
    const [count, setCount] = useState(0);
    return (
      <OldCom
        {...props}
        Count={count}
        Increment={() => setCount(count + 1)}
        Decrement={() => setCount(count - 1)}
      ></OldCom>
    );
  };
};

export default CounterHOC;
