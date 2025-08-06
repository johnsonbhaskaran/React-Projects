import { useEffect, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Dropdown({ children, trigger, onToggle }) {
  const [show, setShow] = useState(false);
  const dropRef = useClickOutside(() => setShow(false));

  useEffect(() => {
    onToggle?.(show);
  }, []);

  return (
    <div className='relative w-fit' onClick={() => setShow((curr) => !curr)} ref={dropRef}>
      <div>{trigger}</div>
      {show && (
        <ul className='right-0 absolute bg-white shadow mt-2 rounded-lg divide-y divide-gray-100 min-w-max overflow-hidden'>
          {children}
        </ul>
      )}
    </div>
  );
}
export const DropdownList = ({ children }) => {
  return (
    <li
      className={`
    flex gap-3 items-center px-4 py-2 text-gray-800 hover:bg-gray-50 cursor-pointer
    `}
    >
      {children}
    </li>
  );
};
