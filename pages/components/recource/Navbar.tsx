import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function Navbar() {
  const myPath = usePathname();
  const [navbar, setNavbar] = useState([
    { title: 'HOME', path: '/', status: true },
    { title: 'ABOUT', path: '/about', status: false },
    { title: 'CARS', path: '/cars', status: false },
    { title: 'NEWS', path: '/news', status: false },
    { title: 'CONTACT', path: '/contact', status: false },
    { title: 'ADD-NEW-CAR', path: '/carloading', status: false },
  ]);

  const handleNavClick = (index: any) => {
    const updateNavbar = navbar.map((nav, i) => ({
      ...nav,
      status: i === index,
    }));
    setNavbar(updateNavbar);
  };

  return (
    <div className={'flex items-center gap-7 px-5 py-4 '}>
      {navbar.map((nav, index) => (
        <div className="" key={index} onClick={() => handleNavClick(index)}>
          <motion.div whileFocus={{ scale: 1.1 }}>
            <Link
              href={nav.path}
              passHref
              key={index}
              className={`text-white tracking-wider leading-5 ${
                myPath === nav.path
                  ? 'bg-[#00de1b] font-bold pt-3 pr-6 pl-6 pb-3'
                  : ''
              }`}
            >
              {nav.title}
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
