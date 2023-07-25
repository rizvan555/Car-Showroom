import React from 'react';
import Navbar from '../home/Navbar';
import SearchButton from '../home/SearchButton';

function Header() {
  return (
    <div className="flex items-center justify-between px-10 bg-black">
      <h1 className="text-white text-2xl">MyCar</h1>
      <div className="flex items-center gap-10">
        <Navbar />
        <SearchButton />
      </div>
    </div>
  );
}

export default Header;
