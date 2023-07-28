import { createPost, getPosts } from "../../../lib/handlers"
import { NextResponse } from "next/server"

export async function GET(req: Request, res: Response){
    try{
        const posts =await getPosts();
        console.log({mesage: 200, posts},{status: 200})
       return NextResponse.json({mesage: "OK", posts},{status: 200})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:500})
    }
}

export const POST =  async (req: Request, res: Response) => {
    try{
        const {title,desc,author,url} =await req.json();
        const post = {title,desc,date: new Date(),author,url}
        await createPost(post)
        console.log(post)
       return NextResponse.json({mesage: "OK", post},{status: 201})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:500})
    }
}
export const PATCH =  async (req: Request, res: Response) => {
    console.log("PATCH")
}
export const DELETE =  async (req: Request, res: Response) => {
    console.log("DELETE")
}