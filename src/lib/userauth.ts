import { connectToMongoDB,client } from "../app/api/mongodb";
var ObjectId = require('mongodb').ObjectId; 

type USER ={
    userName: string,
    password: string,
    profilePic: string
}


export const getUser = async ({userName,password}) => {
    await connectToMongoDB()
    console.log("Is client connected:", client.isConnected());

    const userData = await client.db("mydb").collection("users").findOne({userName,password});
    
    if(userData){
        console.log("User Logged in successfully! ",userData)
        return userData;
    }
    return false;

  };



export const createUser = async ({userName,password,profilePic}) => {
    await connectToMongoDB()
    console.log("Is client connected:", client.isConnected());
    const user = {userName,password,profilePic};
    const result = await client.db("mydb").collection("users").insertOne(user);
    console.log("User SignedUp :"+user);
  };
