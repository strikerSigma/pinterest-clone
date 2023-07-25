import React from 'react'
import Pin from './Pin'


const Layout = () => {
  return (
    <div className='Pin_container'>
        <Pin pin="small" url="/Sample1.jpg"/>
        <Pin pin="medium"  url="/Sample2.jpg"/>
        <Pin pin="large"  url="/Sample3.jpg"/>     
        <Pin pin="small" url="/Sample1.jpg"/>
        <Pin pin="medium"  url="/Sample2.jpg"/>
        <Pin pin="large"  url="/Sample3.jpg"/>     
        <Pin pin="small" url="/Sample1.jpg"/>
        <Pin pin="medium"  url="/Sample2.jpg"/>
        <Pin pin="large"  url="/Sample3.jpg"/>     
    </div>
  )
}

export default Layout