import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className='bg-gray-950 h-screen text-white'>
      <nav className='flex justify-end shadow shadow-gray-900 px-4 py-2'>
        <Button>Menu</Button>
      </nav>
    </div>
  );
}

export default App;
