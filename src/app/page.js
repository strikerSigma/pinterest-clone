
import Layout from '../components/Layout'
import { SessionProvider } from "next-auth/react"

 

export default function Home(
  // {
    //   Component,
    //   pageProps: { session, ...pageProps },
    // }
    ) {
  
  return (
    <main >
      {/* <Component {...pageProps} /> */}
      <Layout/>
    </main>
    // <SessionProvider session={session}>
      // <Component {...pageProps} />  </SessionProvider>
      
      
      
      
      

  )
}
{/* <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=My+Soul&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap" rel="stylesheet"/>
      </Head> */}