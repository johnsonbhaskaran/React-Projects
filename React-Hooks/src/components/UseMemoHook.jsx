import { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const sqrRoot = (num) => {
    console.log("Calculation done!");
    return Math.sqrt(num);
  };

  // WITHOUT useMemo re-render makes the calculation done again
  // const result = sqrRoot(number);

  // USING useMemo hook to avoid unnecessary re-renders
  const result = useMemo(() => sqrRoot(number), [number]);

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h3>
        Square Root of the {number}: {result}
      </h3>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Counter++
      </button>
      <h3>Counter value: {counter}</h3>
    </>
  );
};

export default UseMemoHook;
