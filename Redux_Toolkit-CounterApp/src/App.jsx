import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className='flex justify-center items-center bg-gray-950 h-screen text-white'>
        <div className='flex items-center gap-4 bg-violet-500 p-4 rounded-lg text-5xl'>
          <button
            className='bg-violet-600 hover:bg-white rounded-full size-12 hover:text-violet-600 transition-colors duration-300 cursor-pointer'
            id='decrease'
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <div className='w-16 h-12 text-center'>{counter}</div>
          <button
            className='bg-violet-600 hover:bg-white rounded-full size-12 hover:text-violet-600 transition-colors duration-300 cursor-pointer'
            id='increase'
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
