"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState,useEffect } from 'react';
import Image from 'next/image';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser] = useState();
  const { push } = useRouter();
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
        await axios.post("/api/auth/login", {
          userName,
          password
        }).then(function (response) {
          setUser(response.data.user);
          alert("Login successful")
          push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
        localStorage.setItem("userName", userName);
        localStorage.setItem("profilePic", user.profilePic);

        
       
      } catch (error) {
        console.error("Error sending request:", error);
      }
    console.log('UserName:', userName);
    console.log('Password:', password);

    
  };

  return (

    <main className="w-full background  " >

     <div className='absolute Loginpg pt-5 max-w-lg'>
      <div className='logo'></div>
        <form onSubmit={handleSubmit}>
        <p className="mt-6  text-5xl pb-10 font-light text-white">
            Sign in
          </p>
            <label className="text-slate-400">Username</label>
            <input type="text"  className=" appearance-none mb-5 relative block md:w-full px-3 py-2 border-b-2 text-white  bg-inherit focus:outline-none  focus:z-10 sm:text-sm"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}/>
            <label className="text-slate-400 ">password</label>
            <input type="password" className=" appearance-none mb-5 relative block md:w-full px-3 py-2 border-b-2 text-white   bg-inherit focus:outline-none  focus:z-10 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <button type='Submit' className="mt-4 md:px-24 px-10 py-2 text-md font-semibold rounded-sm text-customRed button focus:outline-none  border-customRed"
             >Sign in</button>
        <div className='text-white'>Don't have an account?<Link className='pl-2 text-customRed' href='/SignUp'>Sign up</Link></div>
        </form>
    </div>
            </main>
  );
};

export default LoginForm;
