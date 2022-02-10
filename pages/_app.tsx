import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <NavBar />
    <Component {...pageProps} />
    <style jsx global>{`
      a {
        color: red;
      }
    `}</style>
    </div>
}

export default MyApp
