import "./App.css";
import Button from "./components/Button";
import Dropdown, { DropdownList } from "./components/Dropdown";
import FeatherIcon from "feather-icons-react";

function App() {
  return (
    <div className='bg-gray-950 h-screen text-white'>
      <nav className='flex justify-end items-start shadow shadow-gray-900 px-4 py-2'>
        <Dropdown trigger={<Button>Menu</Button>}>
          <DropdownList>
            <FeatherIcon icon='cart' /> Cart
          </DropdownList>
          <DropdownList>
            <FeatherIcon icon='cart' /> Cart
          </DropdownList>
          <DropdownList>
            <FeatherIcon icon='cart' /> Cart
          </DropdownList>
          <DropdownList>
            <FeatherIcon icon='cart' /> Cart
          </DropdownList>
        </Dropdown>
      </nav>
    </div>
  );
}

export default App;
