
type POST ={
    id: string,
    title: string,
    desc: string,
    date: string
}

let posts: POST[] = [];

export const getPosts = ()=>  posts;

export const getPost = (id:string)=>{
    const post = posts.find(post=> post.id === id);
    return post;
}

export const updatePost =(id:string,title:string, desc: string)=>{
    const post = posts.find(post => post.id === id);
    if(post){
        post.title = title;
        post.desc = desc;
        console.log("Post updated");
    }
    else{
        throw new Error("POST not found");
    }
}

export const createPost = (post: POST)=>{
    posts.push(post);
    console.log("Post created");
}

export const deletePost = (id:string)=>{
    posts = posts.filter(post=> post.id !== id);
}