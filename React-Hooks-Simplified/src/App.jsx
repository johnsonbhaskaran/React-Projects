import "./App.css";
import UseContextHook from "./Hooks/UseContextHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UseEffectHook2 from "./Hooks/UseEffectHook2";
import UseStateHook from "./Hooks/useStateHook";
import UseRefHook from "./Hooks/UseRefHook";

function App() {
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHook2 /> */}
      {/* <UseContextHook /> */}
      <UseRefHook />
    </>
  );
}

export default App;
