
import {  NextResponse } from 'next/server';
import { createUser } from '../../../../lib/userauth';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST =  async (req: Request, res: Response) => {
    try{
        const {userName,password,profilePic} =await req.json();
        // const post = {title,desc,date: new Date(),author,url}
        await createUser({userName,password,profilePic})
        // console.log(post)
       return NextResponse.json({mesage: "OK"},{status: 201})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:500})
    }
}
