import React from 'react'
import Layout from './Layout'
import Nav from './Nav'
import SideBar from './SideBar'



const Homepg = () => {
  return (
    <>
        <Nav/>
    <div className='flex'>
      <SideBar/>
       <Layout/>
    </div>
    </>
  )
}

export default Homepg