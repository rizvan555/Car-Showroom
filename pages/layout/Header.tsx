import React from 'react';
import Navbar from '../home/Navbar';
import SearchButton from '../home/SearchButton';
import Link from 'next/link';

function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-2 bg-black">
      <Link href="/">
        <h1 className="text-white text-3xl tracking-wider font-bold">LuxuryCars</h1>
      </Link>
      <div className="flex items-center gap-10">
        <Navbar />
        <SearchButton />
      </div>
    </div>
  );
}

export default Header;
