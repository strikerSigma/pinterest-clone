"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
 
import axios from 'axios'

import { useState,useEffect } from "react";
import Link from "next/link";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";


export default function UploadDnd() {
  const [Ptitle,setTitle] = useState<any>();
  const [desc,setDesc] = useState<any>();
  const [image,setImage] = useState< {
    fileUrl: string;
    fileKey: string;
}[]>([])




    const postData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/pin", {
          title: Ptitle,
          desc,
          date: new Date(),
          url: Image[0].fileUrl,
          author: "username",
        });

        console.log(response.data);
      } catch (error) {
        console.error("Error sending request:", error);
      }
    };




  const title = image.length ? (
    <>
      <p>Upload Complete!</p>
      <p className="mt-2">{image.length}</p>
    </>
  ) : null

  const imgList = (
    <>
      {title}
      <ul>
        {image.map(img =>( 
          <li key={img.fileUrl} className="mt-2">
            <Link href={img.fileUrl} target="_blank">
              {img.fileUrl}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadDropzone<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if(res){
            console.log("Files: ", JSON.stringify(res));
            setImage(res)

          }
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <form >
        <input type="text" placeholder="title" value={Ptitle} onChange={e => setTitle(e.target.value)}/>
        <textarea placeholder="desc" value={desc} onChange={e => setDesc(e.target.value)}/>
        <button onClick={postData}>Submit</button>
      </form>
      {imgList}
    </main>
  );
}
