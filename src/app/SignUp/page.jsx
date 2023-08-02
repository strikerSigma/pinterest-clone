"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState,useRef } from 'react';
import {  UploadDropzone } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
import Link from 'next/link';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const IMG = useRef();
    const { push } = useRouter();
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            console.log(localStorage.getItem("profilePic"))
            await axios.post("/api/auth/signup", {
              userName,
              password,
              profilePic: localStorage.getItem("profilePic")
            }).then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
            localStorage.setItem("userName", userName);
            
            alert("SignUp successful")

           push('/');
            
           
          } catch (error) {
            console.error("Error sending request:", error);
          }
        console.log('UserName:', userName);
        console.log('Password:', password);
      };
      const handleResponse =(res) =>{
        IMG.current = res
        console.log(IMG)
        localStorage.setItem("profilePic", IMG.current[0].fileUrl);
        console.log( localStorage.getItem("profilePic"))
        if (IMG.current[0].fileUrl) console.log(localStorage.getItem("profilePic"))
        else console.log("ERR")
      }
  return (
    <div className='flex justify-center bg-gray-50 py-12 mt-20 mx-10 max-w-lg'>
        <form>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
          
          <div className='p-10 pb-2  pt-2'>
            <h3>Choose an image for profile picture</h3>
          <UploadDropzone
endpoint="imageUploader"
onClientUploadComplete={(res) => {
  handleResponse(res);
  console.log("Files: ", res);

}}
onUploadError={(error) => {
  // Do something with the error.
  alert(`ERROR! ${error.message}`);
}}
/>
          </div>
            <input type="text"  className=" appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='UserName'/>
            <input type="password" className="pr-20 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password...'/>
            <button onClick={handleSubmit} className="mt-4  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >Sign up</button>
        </form>
        <div>Already have an account?<Link className='pl-2 text-sky-600' href='/Login'>Sign in</Link></div>
    </div>
  )
}

export default SignUp