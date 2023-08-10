"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Nav = () => {
  
  return (
    <>
        <div className='fixed top-0  flex justify-between z-20 bg-white md:hidden w-full'>
        <div className='mt-5 ml-5 '><Image src='/logo.png' width={150} height={50}/></div>
            <div className='text-customRed text-2xl font-bold mt-5 mr-10'><span className='pr-3'>Hi,</span><span>Thomas</span> </div>
        </div>
    

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