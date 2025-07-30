import { useCallback, useState } from "react";
import Header from "./Header.jsx";

function UseCallbackHook() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {}, []); // Cached Function - will not re-render

  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
    </>
  );
}

export default UseCallbackHook;
