"use client"
import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const SideBar = () => {

    const pathname = usePathname();
    console.log('path',pathname)
  return (
    <div className='pt-5 px-7 hidden md:block relative'>
        <div className='text-customRed text-3xl font-bold mt-5 ml-5'><span className='pr-3'>Hi,</span><span>Thomas</span> </div>
        <div className='mt-10 ml-5 '><Image src='/logo.png' width={150} height={50}/></div>
        <li className='flex-col space-y-5 font-bold text-slate-500 ml-10 mr-5 list-none mt-10'>
            <ul className='flex cursor-pointer relative'>
                <img src='/homepage (1).png' className='w-5 h-5 object-cover'/>
                <Link href='/'><div className={`pl-3 `}>Home</div></Link>
                
                <div className={`${pathname ==='/' ? "bg-customRed" : "" } w-2 h-5 absolute top-0 right-0`}></div>
                </ul>
            <ul className='flex cursor-pointer relative'>
                <img src='/profile.png' className='w-5 h-5 object-cover'/>
                <Link href='/Profile'><div className='pl-3'>profile</div></Link>
                <div className={`${pathname ==='/Profile' ? "bg-customRed" : "" } w-2 h-5 absolute top-0 right-0`}></div></ul>
            <ul className='flex cursor-pointer relative'>
                <img src='/add (1).png' className='w-5 h-5 object-cover'/>
                <Link href='/Create'><div className='pl-3'>Create</div></Link>
                <div className={`${pathname ==='/Create' ? "bg-customRed" : "" } w-2 h-5 absolute top-0 right-0`}></div></ul>
            <ul className='flex cursor-pointer relative'>
                <img src='/messages.png' className='w-5 h-5 object-cover'/>
                <Link href='/Messages'><div className='pl-3'>Messages</div></Link>
                <div className={`${pathname ==='/Messages' ? "bg-customRed" : "" } w-2 h-5 absolute top-0 right-0`}></div></ul>        
        </li>
        <div className='absolute w-0.5 h-96 right-0 top-24 bg-slate-300'></div>
    </div>
  )
}

export default SideBar