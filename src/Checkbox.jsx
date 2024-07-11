import { useState } from "react";

const Checkbox = () => {
  const [status, setStatus] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });
  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="all"
          checked={
            status.checkbox1 &&
            status.checkbox2 &&
            status.checkbox3 &&
            status.checkbox4 &&
            status.checkbox5
          }
          onChange={() =>
            setStatus({
              checkbox1: !status.checkbox1,
              checkbox2: !status.checkbox2,
              checkbox3: !status.checkbox3,
              checkbox4: !status.checkbox4,
              checkbox5: !status.checkbox5,
            })
          }
        />
        <label htmlFor="all"> Select all</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="one"
          checked={status.checkbox1}
          onChange={() =>
            setStatus({ ...status, checkbox1: !status.checkbox1 })
          }
        />
        <label htmlFor="one"> : 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="two"
          checked={status.checkbox2}
          onChange={() =>
            setStatus({ ...status, checkbox2: !status.checkbox2 })
          }
        />
        <label htmlFor="two"> : 2</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="three"
          checked={status.checkbox3}
          onChange={() =>
            setStatus({ ...status, checkbox3: !status.checkbox3 })
          }
        />
        <label htmlFor="three"> : 3</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="four"
          checked={status.checkbox4}
          onChange={() =>
            setStatus({ ...status, checkbox4: !status.checkbox4 })
          }
        />
        <label htmlFor="four"> : 4</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="five"
          checked={status.checkbox4}
          onChange={() =>
            setStatus({ ...status, checkbox5: !status.checkbox5 })
          }
        />
        <label htmlFor="five"> : 5</label>
      </div>
    </div>
  );
};

export default Checkbox;
