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
            <img
              src='https://api.dicebear.com/9.x/adventurer/svg?seed=Amaya'
              alt=''
              className='rounded-full w-16'
            />
            <div className='py-2'>
              <p className='font-medium'>John Doe</p>
              <a href='' className='text-sm-font-medium text-gray-500'>
                johndoe@gmail.com
              </a>
            </div>
          </DropdownList>
          <DropdownList>
            <FeatherIcon icon='shopping-cart' /> Cart
          </DropdownList>
          <DropdownList>
            <FeatherIcon icon='package' /> Orders
          </DropdownList>
          <DropdownList>
            <FeatherIcon icon='settings' /> Preferences
          </DropdownList>
          <DropdownList>
            <FeatherIcon icon='log-out' /> Logout
          </DropdownList>
        </Dropdown>
      </nav>
    </div>
  );
}

export default App;
