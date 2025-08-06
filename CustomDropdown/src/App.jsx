import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className='bg-gray-50 h-screen'>
      <nav className='flex justify-end items-start px-4 py-2 border-b'>
        <Button>Menu</Button>
      </nav>
    </div>
  );
}

export default App;
