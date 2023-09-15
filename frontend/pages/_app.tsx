import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ClerkProvider, SignIn, SignUp } from '@clerk/nextjs';
import Layout from '../layouts/layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);

  if (router.asPath.includes('sign')) {
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
