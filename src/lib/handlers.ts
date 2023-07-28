import { connectToMongoDB,client } from "../app/api/mongodb";
// const connect = async() =>{
//  const client = await clientPromise;
//   const db = client.db("nextjs-mongodb-demo");
//   if(db){
//     console.log("Connected to MongoDB");
//   }
// }

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

export const getPost = async (url:string) => {
    await connectToMongoDB()
    console.log("Is client connected:", client.isConnected());
    const post = await client.db("mydb").collection("posts").findOne({url });
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