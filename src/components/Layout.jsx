"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Pin from './Pin'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Layout = () => {
  const [posts, getPosts] = useState([])
  const { push } = useRouter();
  const [filter, setFilter] = useState([])
  useEffect(()=>{
    const fetchPosts = async() =>{  await  axios("/api/pin").then(res => getPosts(res.data.posts))}
    fetchPosts();
    },[])  


  //Hadling slider:
   const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        console.log("mouse position", e.touches[0].clientX,e.touches[0].clientY)
    };

    const handleTouchMove = (e) => {
        if (!startX) return;
        const x = e.touches[0].clientX;
        const scrollOffset = x - startX;
        setScrollLeft(scrollLeft - scrollOffset);
        setStartX(x);
        console.log(scrollOffset)
        console.log("yay")
    };

    const handleTouchEnd = (e) => {
      console.log(e.touches[0].clientX)     
        setStartX(null);
    };
/////Search functionality
const [query,setQuery] = useState();  

const SortSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Filter the data based on the search term
    const filteredResults = posts.filter((post) =>
        post.name.toLowerCase().includes(searchTerm)
    );

    setQuery(searchTerm); // Update the query state
    setFilter(filteredResults);
};
 
  if (!localStorage.getItem("userName")) {
    push('/Login');
  }

    console.log("post ",posts)
     console.log("User logged in: ",localStorage.getItem("auth"))
     const inlineStyle = {
        transform: `translateX(${-scrollLeft}px)`,
    };
    console.log("filter: ",filter)
  return (
  <div>
    <div className="relative md:mt-10 mt-16 ">
  <div  className="absolute left-14 top-4 w-5 h-5 text-gray-500"><Image src="/search.png" width={15} height={15}/></div>
  <input onChange={SortSearch}
   type="text" className=" bg-gray-200 rounded-full py-3 pr-28 md:pr-44 lg:pr-96 pl-10 focus:outline-none ml-10 " placeholder="Search..." />
</div>
     <div className='flex space-x-8  text-white  mt-5 ml-5'
     style={inlineStyle}
      onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
     >
      {posts.map(post => {return <div className='px-5 py-2 bg-customRed rounded-full'>
        {post.category.name}</div>})}</div>
    <div className='Pin_container'>
        {filter.length === 0 ? posts.map(post => 
        { let pin;
          const rand = Math.floor(Math.random() * 4);
        if(rand <= 1) {pin = "large";}
          else if(rand ===2) {pin = "medium";}
          else {pin = "small";}
          return <Pin  pin={pin} key={post.pinId} post={post}/>
          
        }): filter.map(post => 
        { let pin;
          const rand = Math.floor(Math.random() * 4);
        if(rand <= 1) {pin = "large";}
          else if(rand ===2) {pin = "medium";}
          else {pin = "small";}
          return <Pin  pin={pin} key={post.pinId} post={post}/>
          
        })}
   
    </div>
    </div>
  )
}

export default Layout