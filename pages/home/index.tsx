import React, { Dispatch, SetStateAction, useState } from 'react';
import audiBg from '../../resourse/images/audiBg.webp';
import audibg1 from '../../resourse/images/audibg1.png';
import Carousel from '../home/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HomePageProps {
  light: boolean;
  setLight: Dispatch<SetStateAction<boolean>>;
}
interface PropsCarousel {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  light: boolean;
  setLight: Dispatch<SetStateAction<boolean>>;
}

function HomePage({ light, setLight }: HomePageProps) {
  const settings: PropsCarousel = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    light: light,
    setLight: setLight,
  };

  return (
    <div>
      {light ? (
        <div
          className="h-[100vh]"
          style={{
            backgroundImage: `url(${audiBg.src})`,
            backgroundSize: 'cover',
          }}
        >
          <main>
            <Carousel {...settings} />
          </main>
        </div>
      ) : (
        <div
          className="h-[100vh] text-black"
          style={{
            backgroundImage: `url(${audibg1.src})`,
            backgroundSize: 'cover',
          }}
        >
          <div>
            <button
              className="text-black border py-1 px-5"
              onClick={() => setLight(!light)}
            >
              D/L
            </button>
          </div>
          <main>
            <Carousel {...settings} />
          </main>
        </div>
      )}
    </div>
  );
}

export default HomePage;
