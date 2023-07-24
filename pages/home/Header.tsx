import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div className="flex items-center justify-between px-10">
      <h1 className="text-white text-2xl">MyCar</h1>
      <Navbar />
    </div>
  );
}

export default Header;
