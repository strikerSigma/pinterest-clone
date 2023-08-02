"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState,useEffect } from 'react';

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
        })
        .catch(function (error) {
          console.log(error);
        });
        localStorage.setItem("userName", userName);
        localStorage.setItem("profilePic", user.profilePic);

        alert("Login successful")
        push('/');
       
      } catch (error) {
        console.error("Error sending request:", error);
      }
    console.log('UserName:', userName);
    console.log('Password:', password);

    
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to Your Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
         
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              
              <input
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              
              <input
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <div>Don't have an account yet?<Link className='pl-2 text-sky-600' href='/SignUp'>Sign up</Link></div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
