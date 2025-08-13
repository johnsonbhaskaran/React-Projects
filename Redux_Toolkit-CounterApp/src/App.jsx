import "./App.css";

function App() {
  return (
    <>
      <div className='flex justify-center items-center bg-slate-900 h-screen'>
        <div className='flex bg-'>
          <button>-</button>
          <div className='count'>0</div>
          <button id='increase'>+</button>
        </div>
      </div>
    </>
  );
}

export default App;
