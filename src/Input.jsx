/* eslint-disable react/prop-types */

// const arr = [1, 2, 35, 4, 8, 3];
// eslint-disable-next-line react/prop-types
const Input = ({ data }) => {
  const listItems = data.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Input;
