import React, { useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import {} from 'react-icons/md';
import Link from 'next/link';

function Footer() {
  const [value, setValue] = useState('');
  return (
    <div className="flex justify-center bg-black text-white py-12 gap-8 relative border-t">
      <div className="absolute flex bg-[#00de1b] text-white top-[-4vh] gap-16 px-10 py-4 rounded">
        <div className="flex items-center gap-1">
          <BsTelephoneFill size={20} />
          <p>+49 123567894</p>
        </div>
        <div className="flex items-center gap-1">
          <MdEmail size={20} />
          <p>Luxury-cars@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://www.facebook.com/">
            <ImFacebook2 size={20} />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://twitter.com/?lang=de">
            <FaTwitterSquare size={24} />
          </Link>
          <Link href="https://www.linkedin.com/">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
      <div className="w-[20vw] flex flex-col gap-6">
        <h3 className="text-xl font-bold">CONTACT INFO</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
      </div>
      <div className="w-[20vw] flex flex-col gap-6">
        <h3 className="text-xl font-bold">OPEN HOURS</h3>
        <ul>
          <li>Monday 10:00 am to 08:00 pm</li>
          <li>Monday 10:00 am to 08:00 pm</li>
          <li>Monday 10:00 am to 08:00 pm</li>
          <li>Monday 10:00 am to 08:00 pm</li>
          <li>Monday 10:00 am to 08:00 pm</li>
          <li>Monday 10:00 am to 08:00 pm</li>
          <li>OFF</li>
        </ul>
      </div>
      <div className="w-[20vw] flex flex-col gap-6">
        <h3 className="text-xl font-bold">USEFUL LINK</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the injected
        </p>
      </div>
      <div className="flex flex-col w-[20vw] gap-4">
        <h3 className="text-xl font-bold">NEWSLETTER</h3>
        <input
          type="email"
          placeholder="Enter your Email"
          className="pl-2 py-2 text-black"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className="myButton pl-2 py-2">SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default Footer;
