import React from 'react'
import * as s from '../styles/styles'
import Image from 'next/image';


function Header() {
  return (
    <s.Header>
    <Image src='/assets/JTD.png' width={100} height={50} alt='logo'/>
    </s.Header>
  )
}

export default Header