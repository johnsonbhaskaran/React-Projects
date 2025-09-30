import { useState } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";

const ExpensiveComponentParent = () => {
  const [text, setText] = useState("");

  console.log("Component re-rendered!");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='enter a text'
      />
      <ExpensiveComponent />
    </div>
  );
};
export default ExpensiveComponentParent;
