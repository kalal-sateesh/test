import { useState } from "react";

const DateCalculator = () => {
  const [date, setDate] = useState("");
  const [diff, setDiff] = useState({});
  /* const handleCalculate = () => {
    const current = new Date();
    const selected = new Date(date);
    const timeDifference = Math.abs(selected - current);
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); //1000constant 60 sec 60 min 24 hours
    const hourDifference = Math.floor(
      timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );
    const minuteDifference = Math.floor(
      timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60)
    );
    const secDifference = Math.floor(
      timeDifference % (1000 * 60 * 60 * 24) / 1000
    );

    setDiff({ dayDifference, hourDifference, minuteDifference, secDifference });
  }; */

  const handleCalculate = () => {
    const current = new Date();
    const selected = new Date(date);
    const timeDifference = Math.abs(selected - current);
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hourDifference = Math.floor(
      timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );
    const minuteDifference = Math.floor(
      timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60)
    );
    const secDifference = Math.floor(
      timeDifference % (1000 * 60 * 60 * 24) / 1000
    );
    setDiff({ dayDifference, hourDifference, minuteDifference, secDifference });
  };
  return (
    <div>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <br></br>
      <br></br>
      <button onClick={handleCalculate}>Calculate</button>
      <br></br>
      <h1>
        Days:{diff.dayDifference} Hours:{diff.hourDifference} Minute:
        {diff.minuteDifference} Sec:{diff.secDifference}
      </h1>
    </div>
  );
};

export default DateCalculator;
