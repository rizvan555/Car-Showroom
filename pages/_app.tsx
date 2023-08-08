import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import Layout from '../layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY; // Replace with your environment variable name

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}
