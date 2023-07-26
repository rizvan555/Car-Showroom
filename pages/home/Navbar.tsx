import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';



function Navbar() {
  const [navbar, setNavbar] = useState([
    { title: 'Home', path: '/', status: false },
    { title: 'About', path: '/about', status: false },
    { title: 'Cars', path: '/cars', status: false },
    { title: 'News', path: '/news', status: false },
    { title: 'Contact', path: '/contact', status: false },
  ]);
  return (
    <ul className="flex gap-10 px-5 py-4">
      {navbar.map((nav, index) => (
        <Link href={nav.path} passHref key={index} className=" text-white ">
          {nav.title}
        </Link>
      ))}
    </ul>
  );
}

export default Navbar;
