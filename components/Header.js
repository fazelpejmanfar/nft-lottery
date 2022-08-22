import React from 'react'
import * as s from '../styles/styles'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <s.Header>
    <Link href={'/'} passHref>
    <Image src='/assets/JTD.png' width={100} height={50} alt='logo' style={{cursor: 'pointer'}}/>
    </Link>
    </s.Header>
  )
}

export default Header