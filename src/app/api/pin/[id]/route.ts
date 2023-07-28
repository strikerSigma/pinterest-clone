import { deletePost, getPost, updatePost } from "@/lib/handlers"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response)=>{
    try{
        const id = req.url.split('/pin/')[1];
    console.log(id);
    const post = getPost(id);
       if(post){
        return NextResponse.json({mesage: "OK", post},{status: 200})
       }
       else{
        return NextResponse.json({mesage: "ERROR", post:[]},{status: 404})
       }
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:404})
    }

}

export const PUT = async (req: Request, res: Response)=>{
    try{
        const {title,desc} =await req.json();
        const id = req.url.split('/pin/')[1];
        updatePost(id, title, desc)
       return NextResponse.json({mesage: "OK"},{status: 200})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:404})
    }
}

export const DELETE =  async (req: Request, res: Response) => {
    try{
        const id = req.url.split('/pin/')[1];
        deletePost(id);
       return NextResponse.json({mesage: "OK"},{status: 200})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:404})
    }
}