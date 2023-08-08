import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState([
    { title: 'Home', path: '/', status: true },
    { title: 'About', path: '/about', status: false },
    { title: 'Cars', path: '/cars', status: false },
    { title: 'News', path: '/news', status: false },
    { title: 'Contact', path: '/contact', status: false },
  ]);

  const handleNavClick = (index: any) => {
    const updateNavbar = navbar.map((nav, i) => ({
      ...nav,
      status: i === index,
    }));
    setNavbar(updateNavbar);
  };

  return (
    <div className="flex gap-4 px-5 py-4 ">
      {navbar.map((nav, index) => (
        <div className="" key={index} onClick={() => handleNavClick(index)}>
          <Link
            href={nav.path}
            passHref
            key={index}
            className="text-white tracking-wider leading-5"
            style={{
              backgroundColor: nav.status ? '#00de1b ' : '',
              fontWeight: nav.status ? 'bold' : '',
              paddingTop: 8,
              paddingRight: 16,
              paddingLeft: 16,
              paddingBottom: 8,
            }}
          >
            {nav.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
