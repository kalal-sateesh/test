/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react";

const ReactMemo = React.memo(({ name }) => {
  console.log("MyComponent rendered");
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
});

export default ReactMemo;
