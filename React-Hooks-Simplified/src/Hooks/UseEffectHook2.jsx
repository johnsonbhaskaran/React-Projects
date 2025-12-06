import { useEffect, useState } from "react";

const UseEffectHook2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
    };
  }, []);

  return <div>{windowWidth}</div>;
};
export default UseEffectHook2;
