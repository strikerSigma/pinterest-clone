import { deletePost, getPost } from "../../../../lib/prismaClient"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    try {
      const url = req.url.split('/pin/')[1];
      console.log(url);
      const post = await getPost(url);
  
      if (post) {
        return NextResponse.json({ message: "OK", post }, { status: 200 });
      } else {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
      }
    } catch (err) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  };

export const PUT = async (req: Request, res: Response)=>{
    try{
        // const {title,desc} =await req.json();
        // const id = req.url.split('/pin/')[1];
 
       return NextResponse.json({mesage: "OK"},{status: 200})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:404})
    }
}

export const DELETE =  async (req: Request, res: Response) => {
    try{
        const url = req.url.split('/pin/')[1];
        await deletePost(url);
       return NextResponse.json({mesage: "OK"},{status: 200})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:404})
    }
}