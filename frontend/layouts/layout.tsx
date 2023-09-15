import Footer from '@/pages/components/layout/Footer';
import Header from '@/pages/components/layout/Header';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Layout({ children }: any) {
  return (
    <React.Fragment>
      <Header />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
