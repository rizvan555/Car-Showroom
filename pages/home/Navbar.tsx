import React, { useState } from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState([
    { title: 'Home', status: false },
    { title: 'About', status: false },
    { title: 'Catalog', status: false },
    { title: 'Contact', status: false },
  ]);
  return (
    <ul className="flex gap-5 px-5 py-4">
      {navbar.map((nav, index) => (
        <li key={index} className=" text-white ">
          {nav.title}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
