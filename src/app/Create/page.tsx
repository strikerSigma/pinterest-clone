"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
 
import { UploadButton } from "../../utils/uploadthings";
import { useState } from "react";
import Link from "next/link";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";


export default function UploadDnd() {
  const [image,setImage] = useState< {
    fileUrl: string;
    fileKey: string;
}[]>([])

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
      {imgList}
    </main>
  );
}