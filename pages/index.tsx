import { Inter } from 'next/font/google';
import HomePage from './home';
import FindCar from './findcar';
import About from './about';
import Cars from './cars';
import News from './news';
import Contact from './contact';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [light, setLight] = useState<boolean>(true);
  return (
    <div>
      <HomePage light={light} setLight={setLight} />
      <FindCar />
      <About />
      <Cars />
      <News />
      <Contact />
    </div>
  );
}
