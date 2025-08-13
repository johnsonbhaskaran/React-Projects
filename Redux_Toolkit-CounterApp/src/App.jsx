import "./App.css";

function App() {
  return (
    <>
      <div className='flex justify-center items-center bg-gray-950 h-screen text-white'>
        <div className='flex items-center gap-4 bg-violet-500 p-4 rounded-lg text-5xl'>
          <button
            className='bg-violet-600 hover:bg-white rounded-full size-12 hover:text-violet-600 cursor-pointer'
            id='decrease'
          >
            -
          </button>
          <div className='count'>0</div>
          <button
            className='bg-violet-600 hover:bg-white rounded-full size-12 hover:text-violet-600 cursor-pointer'
            id='increase'
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
