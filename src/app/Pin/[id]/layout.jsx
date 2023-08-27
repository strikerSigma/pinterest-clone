import React from 'react'
import Nav from '../../../components/NavId'
import SideBar from '../../../components/SideBar'
import Layout from '../../../components/Layout'

export default function CreateLayout({ children }) {
  
  return (

<>

        <Nav/>
        <div className='md:flex'>
        <SideBar/>
        {children}
                     
      </div>

</>
  )
}