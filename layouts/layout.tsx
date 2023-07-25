import Footer from '@/pages/layout/Footer';
import Header from '@/pages/layout/Header';
import React from 'react';

function Layout({ children }: any) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
