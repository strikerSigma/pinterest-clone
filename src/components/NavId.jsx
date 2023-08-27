"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Nav = () => {
  
  return (
    <>

    

    <div className='bg-zinc-900 z-10 flex space-x-16  md:pl-10 text-white w-full md:hidden bottom-0 fixed text-lg font-bold py-2 px-10 underline'>
        <div><Link href='/'><img src='/homepage.png'  alt='Icon'/></Link></div>
        <div className='pr-5'><Link href='/Search'><img src='/glass.png'  alt='Icon'/></Link></div>
        <div className='pl-5'><Link href='/Create'><img src='/add.png'  alt='Icon'/></Link></div>
        
        <div ><Link href='/Profile'><img src='/user1.png'  alt='Icon'/></Link></div>
    </div>
    <div className='fixed z-20 bottom-1.5 create md:hidden'>
        <Link href='/Create'><img src='/createNav.png'  alt='Icon'/></Link></div>


    </>
  )
}

export default Nav