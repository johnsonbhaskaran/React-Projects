import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center bg-zinc-950 h-screen text-white'>
      <div className='flex gap-4'>
        <button
          onClick={() => dispatch(decrement())}
          className='rounded-full size-16 overflow-hidden cursor-pointer'
        >
          <div className='flex justify-center items-center bg-purple-400 hover:bg-purple-500 p-2 w-full h-full text-5xl'>
            ➖
          </div>
        </button>
        <div className='px-4 text-7xl text-center'>{counter}</div>
        <button
          onClick={() => dispatch(increment())}
          className='rounded-full size-16 overflow-hidden cursor-pointer'
        >
          <div className='flex justify-center items-center bg-purple-400 hover:bg-purple-500 p-2 w-full h-full text-5xl'>
            ➕
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
