import { Inter } from 'next/font/google';
import HomePage from './home';
import About from './about';
import Cars from './cars';
import News from './news';
import Contact from './contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Cars />
      <News />
      <Contact />
    </div>
  );
}
