import { useCallback, useState } from "react";
import Header from "./Header.jsx";

function UseCallbackHook() {
  const [count, setCount] = useState(0);

  // const newFn = ()=> {}
  const newFn = useCallback(() => {}, []); // Cached Function - will not re-render
  // const newFn = useCallback((count) => {}, [count]); // Cached Function - will re-render when dependency changes

  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
    </>
  );
}

export default UseCallbackHook;
