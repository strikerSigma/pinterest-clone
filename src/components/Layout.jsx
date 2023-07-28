"use client"
import React, { useEffect, useState } from 'react'
import Pin from './Pin'
import axios from 'axios'


const Layout = () => {
  const [posts, getPosts] = useState([])
  // useEffect(async()=>{
  // await  axios("/api/pin",{
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "Hello",
  //       desc: "this is a test",
  //       date: new Date(),
  //       url: "fake url",
  //       author: "fake username"
  //     })
  //   }).then(res => console.log(res))
  //   console.log("req sent on client")
  // },[])
  useEffect(async()=>{
    await  axios("/api/pin").then(res => getPosts(res.data.posts))

    },[])
    console.log(posts)
  return (
    <div className='Pin_container my-20 md:my-0'>
      {posts && posts.map(post => 
        { let pin;
          const rand = Math.floor(Math.random() * 4);
        if(rand <= 1) {pin = "large";}
          else if(rand ===2) {pin = "medium";}
          else {pin = "small";}
          return <Pin pin={pin} post={post}/>
        })}
        {/* <Pin pin="small" url="/Sample1.jpg"/>
        <Pin pin="medium"  url="/Sample2.jpg"/>
        <Pin pin="large"  url="/Sample3.jpg"/>      */}
   
    </div>
  )
}

export default Layout