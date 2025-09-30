import React from "react";

// const ExpensiveComponent = React.memo(() => {
const ExpensiveComponent = () => {
  console.log("expensive component rendered!");

  let total = 0;
  for (let i = 1; i <= 1000000000; i++) {
    total = total + i;
  }

  return <div>ExpensiveComponent</div>;
};
export default ExpensiveComponent;
