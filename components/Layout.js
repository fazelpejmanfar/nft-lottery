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
      content="NFT LOTTERY"
    />
    <title>NFT LOTTERY</title>
    </Head>
        <Header />
        <main>{children}</main>
        </>
    )
  }