import {  NextResponse } from 'next/server';
import searchResult from '../webScraper'

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req: Request, res: Response){
    try{
        const results = await searchResult();
        console.log({mesage: 200, results},{status: 200})
       return NextResponse.json({mesage: "OK",results},{status: 200})
    }
    catch(err){
       return NextResponse.json({message: err.message},{status:500})
    }
}
