import Layout from '../components/Layout'
import { SessionProvider } from "next-auth/react"

export default function Home() {
  // {
  //   Component,
  //   pageProps: { session, ...pageProps },
  // }
  return (
    // <SessionProvider session={session}>
    //   <Component {...pageProps} />
    // </SessionProvider>
    <div>
      <Layout/>
    </div>
  )
}
