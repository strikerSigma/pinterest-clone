import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'

const Page = () => {
  return (
    <div>
        <div class="flex justify-center mt-20">
        <Image src="/user.png" width={180} height={180}/>
        </div>
        <div class="flex justify-center mt-5 text-4xl font-bold">Username</div>
        <div className='flex justify-center '>@Username</div>
        <div className='flex justify-center mt-5 text-xl font-medium underline'>Saved</div>
        <div>
            <Layout/>
        </div>
    </div>
  )
}

export default Page