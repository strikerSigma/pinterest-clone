"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { useRouter } from 'next/navigation';
import axios from 'axios'

import { useState,useEffect, useRef } from "react";

import {  UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import { Open_Sans } from 'next/font/google';

const OpenSans = Open_Sans({ subsets: ['latin'] });

export default function UploadDnd() {
  
  const [Ptitle,setTitle] = useState<any>();
  const [desc,setDesc] = useState<any>();
  const IMG = useRef<any>();

  const { push } = useRouter();
  if(!localStorage.getItem("auth")){
    push('/Login')
    }

   const postData = async ( event) => {
      event.preventDefault();
      console.log("The image is: "+IMG.current[0].fileUrl)
      try {
        await axios.post("/api/pin", {
          title: Ptitle,
          desc,
          date: new Date(),
          url: localStorage.getItem("fileUrl") || "fake Url",
          author: "username",
        }).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

       
      } catch (error) {
        console.error("Error sending request:", error);
      }
    };

 


  const handleResponse =(res) =>{
    IMG.current = res
    console.log(IMG)
    localStorage.setItem("fileUrl", IMG.current[0].fileUrl);
    console.log( localStorage.getItem("fileUrl"))
    if (IMG.current[0].fileUrl) console.log(localStorage.getItem("fileUrl"))
    else console.log("ERR")
  }

  

  return (
    <div  className={OpenSans.className}>
      <h1 className="flex justify-center font-bold text-4xl mt-28 Create">Let your Creativity run wild</h1>
      <div className="flex justify-center">
      
      <main className=" flex min-h-screen flex-col md:flex-row  items-center p-24 pt-2">
 <UploadDropzone<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          handleResponse(res);
          console.log("Files: ", res);

        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <form onSubmit={postData} className="mt-8 sm:ml-4">
        <label className="mt-4 text-xl font-bold">Title:</label>
        <input className="mb-4 outline-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
         type="text" placeholder="title" value={Ptitle} onChange={e => setTitle(e.target.value)}/>
        <label className="text-xl font-bold">Description:</label>
        <textarea className="mb-4 outline-none block w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-blue-500 focus:border-blue-500"
         placeholder="desc" value={desc} onChange={e => setDesc(e.target.value)}/>
        <button className=" px-6 py-2 bg-red-500 text-white rounded-full focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" 
        type="submit" >Submit</button>
      </form>
    </main>
    </div>
    </div>
    
    
  );
}
