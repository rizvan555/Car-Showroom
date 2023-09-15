import React from 'react';
import Navbar from '../recource/Navbar';
import SearchButton from '../recource/SearchButton';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        <div className="flex items-center justify-between px-10 py-2 bg-black">
          <Link href="/">
            <h1 className="text-white text-3xl tracking-wider font-bold">
              LuxuryCars
            </h1>
          </Link>
          <div className="flex items-center gap-6">
            <Navbar />
            <SearchButton />
            <UserButton />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Header;
