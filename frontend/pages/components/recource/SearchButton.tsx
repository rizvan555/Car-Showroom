import Link from 'next/link';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

function SearchButton() {
  return (
    <Link href="/findcar" className=" text-white">
      <BiSearch size={23} />
    </Link>
  );
}

export default SearchButton;
