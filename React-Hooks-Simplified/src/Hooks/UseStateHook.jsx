import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prev) => prev - 1);
  }
  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className='space-x-5 flex justify-center items-center h-screen'>
      <button onClick={decrementCount} className='px-5 py-3 border rounded-md cursor-pointer'>
        -
      </button>
      <span>{count}</span>
      <button onClick={incrementCount} className='px-5 py-3 border rounded-md cursor-pointer'>
        +
      </button>
    </div>
  );
};
export default UseStateHook;
