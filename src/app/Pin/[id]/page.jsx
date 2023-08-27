"use client"

import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react'
import Layout from '../../../components/Layout';
import { useRouter } from 'next/navigation';
const Pin = () => {
const { push } = useRouter();
  useEffect(() => {
   
    if (!localStorage.getItem("userName")) {
      push('/Login');
    }
  }, []);
    const [currentUrl, setCurrentUrl] = useState('');
    const [post, setPost] = useState('');
    

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

    const url = currentUrl.split('/Pin/')[1];
    console.log(url);
    useEffect(()=>{
        const fetchPosts = async() =>{  await  axios(`/api/pin/${url}`).then(res => res && setPost(res.data.post))}
        
        fetchPosts();
        
      },[url]) 
      console.log("indvidual post: ",post)
    return (
      <>
             <img className='absolute top-0 md:hidden cover ' src={post.imageUrl} alt={post.name} />
            <div className='flex flex-col justify-center mt-20 mx-10'>
                {post && 
                <div className=' justify-center sm:flex relative  container'>
                <div className='  imagePin hidden md:block'><img className='object-cover ' src={post.imageUrl} alt={post.name} /></div>
                <div class="flex-1 pl-5 pt-8">
                <div className='flex justify-between w-full'><div className='text-4xl font-normal'>{post.name}</div>
                    <button className='bg-customRed absolute top-2 right-2 sm:static rounded-full py-3 px-8 text-white mr-5'>Save</button></div>
                <div>{post.author.name}</div>
                <div>{post.description}</div></div>
                </div>}{!post && <div className='text-bold text-3xl'>Loading...</div>}


            </div>
            </>
          )
}

export default Pin