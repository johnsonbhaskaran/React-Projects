import { useState } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";

const ExpensiveComponentParent = () => {
  return (
    <BgProvider>
      <ExpensiveComponent />
    </BgProvider>
  );
};

const BgProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  console.log("Component re-rendered!");

  return (
    <div>
      <input
        style={{ backgroundColor }}
        onChange={(e) => setBackgroundColor(e.target.value)}
        type='backgroundColor'
        placeholder='enter a backgroundColor'
      />
      {children}
    </div>
  );
};

export default ExpensiveComponentParent;
