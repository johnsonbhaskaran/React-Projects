import { useState } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";

const ExpensiveComponentParent = () => {
  console.log("Component re-rendered!");

  return (
    <div>
      <Form />
      <ExpensiveComponent />
    </div>
  );
};

const Form = () => {
  const [text, setText] = useState("");

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      type='text'
      placeholder='enter a text'
    />
  );
};
export default ExpensiveComponentParent;
