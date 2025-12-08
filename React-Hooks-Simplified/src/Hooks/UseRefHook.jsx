import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='my-6 px-5 py-3 border rounded-md'
      />
      <div className='text-3xl'>My name is {name}</div>
      <div className='text-xl'>render count: {renderCount.current}</div>
    </>
  );
};
export default UseRefHook;
