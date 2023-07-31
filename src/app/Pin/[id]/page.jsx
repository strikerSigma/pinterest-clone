"use client"

import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react'
import Layout from '../../../components/Layout';

const page = () => {
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
        // useEffect(()=>{
        //     setTimeout(() => {
        //         window.location.reload()
        //     }, 2000); 
        // },[url])
    //  {!post && alert("Please Refresh")}  
    return (
            <div className='flex flex-col justify-center mt-20'>
             
                {post && 
                <div className=' flex justify-center shadow-lg sm:flex rounded-lg pt-10 container'>
                <div className='flex-1'><img className='object-cover img2 rounded-t-2xl' src={post.url} alt={post.title} /></div>
                <div class="flex-1 pl-2 pt-2">
                <div className='text-3xl font-semibold'>{post.title}</div>
                <div>{post.author}</div>
                <div>{post.desc}</div></div>
                </div>}{!post && <div className='text-bold text-3xl'>Please Refresh this page!</div>}
                <div>
                    <Layout/>
                </div>

            </div>
          )
}

export default page