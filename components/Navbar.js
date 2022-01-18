import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar({ title, menu, showMenu, setShowMenu }) {
  return (
    <div className="bg-gray-800 w-full flex justify-between items-center p-4">
      <h1 className="font-mono text-lg text-white font-medium">{title}</h1>
      <div
        className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          Experimental
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          Rankings subject to change
        </span>
      </div>
      {menu && (
        <div
          className="md:hidden text-md text-white"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      )}
    </div>
  );
}

export default Navbar;
