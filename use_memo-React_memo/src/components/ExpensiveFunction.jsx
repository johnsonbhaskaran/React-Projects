import { useMemo } from "react";
import { useState } from "react";

const ExpensiveFunction = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const expensive = (n) => {
    console.log("function re-rendered!");
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  };

  const sum = useMemo(() => expensive(number), [number]);

  console.log("Component re-rendered!");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Enter text'
        value={text}
      />
      <input
        onChange={(e) => setNumber(e.target.value)}
        type='number'
        placeholder='Enter number'
        value={number}
      />
      <span>Total: {sum}</span>
    </div>
  );
};
export default ExpensiveFunction;
