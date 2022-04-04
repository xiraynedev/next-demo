import {AppProps} from 'next/app';
import '../styles/global.scss';
import {Navbar} from '../components/Navbar/Navbar';
import { SessionProvider } from 'next-auth/react';

export default function App({Component, pageProps}: AppProps) {
  return (
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
  );
}
