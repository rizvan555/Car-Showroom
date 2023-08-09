import { Inter } from 'next/font/google';
import HomePage from './home';
import FindCar from './findcar';
import About from './about';
import Cars from './cars';
import News from './news';
import Contact from './contact';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [light, setLight] = useState<boolean>(true);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.replace('/sign-in');
    }
  }, [user, router]);
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
