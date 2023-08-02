"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRouter } from 'next/navigation';

const Page = () => {

  const { push } = useRouter();
  const profilePic = localStorage.getItem("profilePic")
  const userName = localStorage.getItem("userName")
  useEffect(() => {
   
    if (!localStorage.getItem("userName")) {
      push('/Login');
    }
  }, []);

    // const {userName,profilePic} = localStorage.getItem("auth")
  return (
    <div>
          {/* <div className='absolute top-0 z-0'><img src={`${profilePic}`}/></div> */}
        <div class="flex justify-center mt-20 ">
        <div className=''><img src={`${profilePic}`} className='w-28 h-28 rounded-full object-cover'/></div>
        </div>
        <div class="flex justify-center mt-5 text-4xl font-bold">{userName}</div>
        <div className='flex justify-center '>@{userName}</div>
        <div className='flex justify-center mt-5 text-xl font-medium underline'>Saved</div>
        <div>
            <Layout/>
        </div>
    </div>
  )
}

export default Page