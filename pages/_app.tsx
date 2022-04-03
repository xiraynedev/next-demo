import {AppProps} from 'next/app';
import '../styles/global.scss';

export default function App({Component, pageProps}: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
    )
}
