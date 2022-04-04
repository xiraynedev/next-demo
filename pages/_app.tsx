import {AppProps} from 'next/app';
import '../styles/global.scss';
import {Navbar} from '../components/Navbar/Navbar';

export default function App({Component, pageProps}: AppProps) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}
