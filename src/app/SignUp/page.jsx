"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState,useRef } from 'react';
import {  UploadButton } from "@uploadthing/react";
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
      <main className="w-full background  " >

     <div className='absolute Loginpg pt-5 max-w-lg'>
      <div className='logo'></div>
        <form onSubmit={handleSubmit} >
        <p className="mt-3  text-5xl mb-5 font-light text-white">
            Sign up
          </p>
          <label className="text-slate-400">Profile Image</label>
          <div className='absolute'>
            <UploadButton
          
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
            <div className='mt-16'>
              <label className="text-slate-400">Username</label>
            <input type="text"  className=" appearance-none mb-5 relative block md:w-full px-3 py-2 border-b-2 text-white  bg-inherit focus:outline-none  focus:z-10 sm:text-sm"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}/>
            <label className="text-slate-400 ">password</label>
            <input type="password" className=" appearance-none mb-5 relative block md:w-full px-3 py-2 border-b-2 text-white   bg-inherit focus:outline-none  focus:z-10 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <button type='Submit' className="mt-4 md:px-24 px-10 py-2 text-md font-semibold rounded-sm text-customRed button focus:outline-none  border-customRed"
             >Sign up</button>
            </div>
        <div className='text-white'>Already have an account?<Link className='pl-2 text-customRed' href='/Login'>Sign up</Link></div>
        </form>
    </div>
            </main>
  )
}

export default SignUp
          