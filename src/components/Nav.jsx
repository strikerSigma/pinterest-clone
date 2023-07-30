"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Nav = () => {
  return (
    <>
    <div className=' w-full md:hidden navup fixed top-0 text-lg font-bold py-3 pl-10 underline'>All</div>
    <div className='nav mt-3 flex justify-center md:space-x-10 p-4 lg:space-x-24'>
        <div className='h-12 w-12 p-2 rounded-full cursor-pointer hover:bg-slate-200'>
            <Link href='/'><Image src="/pinterest.png" width={35} height={15} /></Link></div>
        <div className='  '>
            <div className='cursor-pointer h-12 w-18 p-3 rounded-full hover:bg-slate-200'>
                <Link href='/'>Home</Link></div></div>
        <div className=' pr-7 lg:pr-12 '>
            <div className='cursor-pointer h-12 w-18 p-3 rounded-full hover:bg-slate-200'>
                <Link href='/'>Create</Link></div></div>
        <div className="relative bg-gray-200 rounded-full py-3 mx-20">
  <div  className="absolute left-4 top-4 w-5 h-5 text-gray-500"><Image src="/search.png" width={15} height={15}/></div>
  <input type="text" className="bg-transparent focus:outline-none ml-10 lg:mr-60 md:mr-20" placeholder="Search..." />
</div>

        <div  className='pt-2 pl-5 lg:pl-32 cursor-pointer'><Image src="/bell.png" width={25} height={15} /></div>
        <div  className='pt-2 cursor-pointer'><Link href='/Profile'><Image src="/user.png" width={30} height={15} /></Link></div>

    </div>
    <div ><Link href='/'><img src='/homepage.png'  alt='Icon'/></Link></div>

    <div className='bg-zinc-900 flex space-x-20 md:space-x-28 md:pl-10 text-white w-full lg:hidden bottom-0 fixed text-lg font-bold py-2 px-10 underline'>
        <div><Link href='/'><img src='/homepage.png'  alt='Icon'/></Link></div>
        <div><Link href='/Search'><img src='/glass.png'  alt='Icon'/></Link></div>
        <div><Link href='/Create'><img src='/add.png'  alt='Icon'/></Link></div>
        
        <div><Link href='/Profile'><img src='/user1.png'  alt='Icon'/></Link></div>
    </div>

    </>
  )
}

export default Nav