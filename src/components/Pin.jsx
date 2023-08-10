import Link from 'next/link'
import React from 'react'

const Pin = (props) => {
    
        const style = {
            small: {
                gridRowEnd: 'span 26',
            },
            medium: {
                gridRowEnd: 'span 33',
            },
            large: {
                gridRowEnd: 'span 45',
            }
        }
console.log("props:",props.post)
  return (
    <Link href={`/Pin/${props.post.pinId}`}
    >
        <div  className=' pin cursor-pointer z-0 '>
             <div className='relative'>
                <img src={props.post.imageUrl} alt={props.post.description} className='rounded-xl object-cover PinImg' style={{ width: '100%', height: '100%' }}/>
        <div className='absolute bottom-0 pt-7 pl-2 cursor-pointer overlay text-white font-semibold'>
            <div className='text-lg cursor-pointer'>{props.post.name}</div>
            <div className='text-sm font-normal cursor-pointer text-neutral-400'>{props.post.category.name}</div>
        </div>
            </div> 
        </div>
        
     </Link>
  )
}

export default Pin
