
import {  NextResponse } from 'next/server';
import {  getUser } from '../../../../lib/userauth';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST =  async (req: Request, res: Response) => {
    try{
        const {userName,password} =await req.json();
        const user = await getUser({userName,password})
        
        if(user){ return NextResponse.json({mesage: "OK",user},{status: 201})}
        return NextResponse.json({mesage: "User Not Found"},{status: 404})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:500})
    }
}
