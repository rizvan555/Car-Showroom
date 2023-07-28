import React, { Dispatch, SetStateAction } from 'react';
import audiBg from '../../resourse/images/audiBg.jpg';
import audi1 from '../../resourse/images/audi1.jpeg';
import audi2 from '../../resourse/images/audi2.png';
import Carousel from '../home/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HomePageProps {
  light: boolean;
  setLight: Dispatch<SetStateAction<boolean>>;
}

function HomePage({ light, setLight }: HomePageProps) {
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
          <div>
            <button
              className="text-white border py-1 px-5"
              onClick={() => setLight(!light)}
            >
              D/L
            </button>
          </div>
          <main>
            <Carousel light={light} setLight={setLight} />
          </main>
        </div>
      ) : (
        <div
          className="h-[100vh] text-black"
          style={{
            backgroundImage: `url(${audi2.src})`,
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
            <Carousel light={light} setLight={setLight} />
          </main>
        </div>
      )}
    </div>
  );
}

export default HomePage;
