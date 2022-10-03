import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * MyApp component
 * @param param0 
 * @returns 
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
