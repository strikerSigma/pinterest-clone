import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='bg-zinc-900 h-full w-full pt-1 search'>
       <div className="relative bg-gray-900 rounded-full py-3 mt-16 mx-20">
  <div  className="absolute left-4 top-4 w-5 h-5 text-white"><Image src="/search.png" width={15} height={15}/></div>
  <input autofocus type="text" className="bg-transparent focus:outline-none ml-10 text-white" placeholder="Search..." />
</div>
    </div>
  )
}

export default Page