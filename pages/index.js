import Head from 'next/head'
import Image from 'next/image'
import * as s from '../styles/styles'
import Header from '../components/Header'
import Connect from '../components/Connect'


export default function Home() {



  return (
    <s.Main>
    <Header/>
    <Connect/>
   </s.Main>
  )
}
