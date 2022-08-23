import Header from './Header'
import Head from 'next/head'
export default function Layout({ children }) {
    return (
      <>
    <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Completely random lottery system. 1 in 10 tickets can grab winnings up to 2000 $"
    />
    <title>JTD - NFT lottery</title>
    </Head>
        <Header />
        <main>{children}</main>
        </>
    )
  }