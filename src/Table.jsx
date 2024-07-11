/* eslint-disable react/prop-types */

const Table = ({ expensiveDetails }) => {


  const count = expensiveDetails.reduce((acc, curr) => {
    acc += parseInt(curr.count);
    return acc;
  }, 0);


  const tableList = expensiveDetails.map((ele, index) => {
    return (
      <tr key={index}>
        <td>{ele.title}</td>
        <td>{ele.count}</td>
      </tr>
    );
  });
  return (
    <table border="1px" style={{ margin: "auto", marginTop: "100px" }}>
      <thead>
        <tr>
          <th>Expensive</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>{tableList}</tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{count}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
