
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import {SSRProvider} from '@react-aria/ssr'; 

import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
  return(
<SSRProvider>
    <NextUIProvider theme={darkTheme} >
      <Component {...pageProps} />
      </NextUIProvider> 
  </SSRProvider>
  )
}
