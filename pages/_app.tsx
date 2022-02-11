import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <style jsx global>{`
      a {
        color: red;
      }
    `}</style>
    </div>
}

export default MyApp
