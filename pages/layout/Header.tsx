import React from 'react';
import Navbar from '../home/Navbar';
import SearchButton from '../home/SearchButton';
import Link from 'next/link';

function Header() {
  return (
    <div className="flex items-center justify-between px-10 bg-black">
      <Link href="/">
        <h1 className="text-white text-2xl">MyCar</h1>
      </Link>
      <div className="flex items-center gap-10">
        <Navbar />
        <SearchButton />
      </div>
    </div>
  );
}

export default Header;
