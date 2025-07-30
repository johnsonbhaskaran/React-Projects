import React from "react";
import { useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
  useEffect(() => {
    console.log("Message from useEffect hook");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect hook");
  }, []);

  return (
    <>
      <h2>UseLayoutEffect</h2>
      <ol>
        {Array(20000)
          .fill("")
          .map((item, index) => (
            <li key={index}>{Math.pow(Math.random(), 10)}</li>
          ))}
      </ol>
    </>
  );
}

export default UseLayoutEffect;
