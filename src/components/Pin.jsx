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
    <div  className='pin' style={...style[props.pin]}>
        <img src={props.url} className='rounded-xl' style={{ width: '100%', height: '100%' }}/>
     </div>
  )
}

export default Pin