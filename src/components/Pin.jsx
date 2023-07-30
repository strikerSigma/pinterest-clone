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

  return (
    <Link href={`/Pin/${props.post._id}`}
     className=' pin cursor-pointer' style={style[props.pin]}>
        <img src={props.post.url} alt={props.post.desc} className='rounded-xl object-cover PinImg' style={{ width: '100%', height: '100%' }}/>
        <div>{props.post.title}</div>
     </Link>
  )
}

export default Pin