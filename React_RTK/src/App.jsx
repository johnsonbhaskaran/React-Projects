import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const valueChangeHandler = (v) => {
    setValue(v);
  };

  return (
    <div className='flex justify-center items-center bg-indigo-950 h-screen text-white'>
      <div className='flex flex-col space-y-6 p-2'>
        <h1 className='font-bold text-3xl text-center'>Counter</h1>
        <p className='text-center'>Value: {count}</p>
        <div className='space-x-3'>
          <button className='px-3 py-1 border rounded' onClick={() => dispatch(decrement())}>
            decrement
          </button>
          <button className='px-3 py-1 border rounded' onClick={() => dispatch(reset())}>
            reset
          </button>
          <button className='px-3 py-1 border rounded' onClick={() => dispatch(increment())}>
            increment
          </button>
        </div>
        <div className='flex justify-between space-x-3'>
          <input
            type='text'
            placeholder='Enter the value..'
            className='border-b focus:outline-none text-white/30 focus:text-white'
            value={value}
            onChange={(e) => {
              valueChangeHandler(Number(e.target.value));
            }}
          />
          <button
            className='px-3 py-1 border rounded'
            onClick={() => dispatch(incrementByAmount(value))}
          >
            Add this
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
