import { AppProps } from 'next/app'
import 'normalize.css'
import 'containers/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
