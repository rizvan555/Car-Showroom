import React from 'react';
import audiBg from '../../resourse/images/audiBg.jpg';
import Carousel from '../home/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage: `url(${audiBg.src})`,
        backgroundSize: 'cover',
      }}
    >
      <main>
        <Carousel />
      </main>
    </div>
  );
}

export default HomePage;
