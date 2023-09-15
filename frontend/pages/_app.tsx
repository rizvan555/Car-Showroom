import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ClerkProvider, SignIn, SignUp } from '@clerk/nextjs';
import Layout from '../layouts/layout';

function MyApp({ Component, pageProps }: AppProps) {
  // SignIn ve SignUp sayfalarında Layout kullanmayın
  if (Component === SignIn || Component === SignUp) {
    return (
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    );
  } else {
    return (
      <ClerkProvider {...pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    );
  }
}

export default MyApp;
