import { connectToMongoDB,client } from "../app/api/mongodb";
var ObjectId = require('mongodb').ObjectId; 

type POST ={
    title: string,
    desc: string,
    date: Date,
    url: string,
    author: string,
}

let posts: POST[] = [];

export const getPosts =async ()=>  {
    await connectToMongoDB()
    console.log("Is client connected:", client.isConnected());
    const posts = await client.db("mydb").collection("posts").find().toArray();
    return posts
};

export const getPost = async (id:string) => {
    await connectToMongoDB()
    console.log("Is client connected:", client.isConnected());
    var o_id = new ObjectId(id);
    const post = await client.db("mydb").collection("posts").findOne({_id:o_id});
    console.log(post)
    
    return post;
  };

// export const updatePost =(id:string,title:string, desc: string)=>{
//     const post = posts.find(post => post.id === id);
//     if(post){
//         post.title = title;
//         post.desc = desc;
//         console.log("Post updated");
//     }
//     else{
//         throw new Error("POST not found");
//     }
// }


export const createPost = async (post ) => {
    await connectToMongoDB()
    console.log("Is client connected:", client.isConnected());
    const result = await client.db("mydb").collection("posts").insertOne(post);
    console.log("Post created :"+result);
  };
export const deletePost = async(url:string)=>{
    await connectToMongoDB()
    console.log("Is client connected:", client.isConnected());
    const result = await client.db("mydb").collection("posts").deleteOne({ url });
    console.log("Post deleted :"+result);
}