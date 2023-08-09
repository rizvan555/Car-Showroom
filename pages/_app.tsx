import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ClerkProvider} from '@clerk/nextjs';
import Layout from '../layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}
