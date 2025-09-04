import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./features/counter/counterSlice.js";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState(0);

  return (
    <div className='flex justify-center items-center bg-indigo-950 h-screen text-white'>
      <div className='flex flex-col space-y-5'>
        <h1 className='font-bold text-3xl text-center'>Counter</h1>
        <div className='text-center'>
          <p>Counter value: {count}</p>
        </div>
        <div className='space-x-3'>
          <button className='px-3 py-1 border rounded-sm' onClick={() => dispatch(decrement())}>
            decrement
          </button>
          <button className='px-3 py-1 border rounded-sm' onClick={() => dispatch(reset())}>
            reset
          </button>
          <button className='px-3 py-1 border rounded-sm' onClick={() => dispatch(increment())}>
            increment
          </button>
        </div>
        <div className='flex justify-between space-x-2'>
          <input
            type='text'
            className='border-b focus:outline-0'
            value={inpValue}
            onChange={(e) => setInpValue(Number(e.target.value))}
            placeholder='Enter counter value'
          />
          <button
            className='px-3 py-1 border rounded-sm'
            onClick={() => dispatch(incrementByAmount(inpValue))}
          >
            Add this
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
