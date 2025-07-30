import { useReducer } from "react";

function UseReducerHook() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      case "input":
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>

      <br />
      <br />

      <input
        value={state.count}
        onChange={(e) => dispatch({ type: "input", payload: Number(e.target.value) })}
        type='number'
      />
    </>
  );
}

export default UseReducerHook;

// console.log("Component re-rendered");

// // Step 1: Define Reducer Function
// function counterReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// function UseReducerHook() {
//   // Step 2: Initialize useReducer
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });

//   return (
//     <div>
//       <h2>Count: {state.count}</h2>

//       {/* Step 3: Dispatch Actions */}
//       <button onClick={() => dispatch({ type: "increment" })}>++</button>
//       <button onClick={() => dispatch({ type: "reset" })}>0</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>--</button>
//     </div>
//   );
// }
