import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps: { session, ...pageProps} }) {

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp;