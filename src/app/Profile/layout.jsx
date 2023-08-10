import React from 'react'
import Nav from '../../components/Nav'
import SideBar from '../../components/SideBar'

export default function CreateLayout({ children }) {
  
  return (

<>
        <Nav/>
        <div className='flex'>
        <SideBar/>
        {children}
    </div>
</>
  )
}