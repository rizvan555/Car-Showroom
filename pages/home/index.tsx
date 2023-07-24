import React from 'react';
import Header from './Header';
import audiBg from '../../resourse/images/audiBg.jpg';

function HomePage() {
  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage: `url(${audiBg.src})`,
        backgroundSize: 'cover',
      }}
    >
      <Header />
    </div>
  );
}

export default HomePage;
