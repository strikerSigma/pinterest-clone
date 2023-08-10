import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getPosts =async ()=>  {
    const posts = await prisma.pin.findMany({include: {category: true}})
    const category = await prisma.category.findMany()
    return {posts,category}
};

export const getPost = async (id:string) => {
    const post = await prisma.pin.findUnique({ 
        where: { pinId: id },
        include: {
           author: {select: {name: true,id: true}},
           category: true 
        }
    } )
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
    
    let existingCategory = await prisma.category.findUnique({
    where: { name: post.category },
  });

  if (!existingCategory) {
    existingCategory = await prisma.category.create({
      data: {
        name: post.category,
      },
    });
  }
    const result = await prisma.pin.create({
        data: {
            name: post.title,
            description: post.desc,
            imageUrl: post.url,
           author: { connect: { id: post.authorId } },
            category: { connect: { name: post.category } },
        }
    })
    console.log("Post created :"+result);
  };
export const deletePost = async(id:string)=>{

    const result = await prisma.pin.delete({
        where:{
            pinId: id
        }
    })
    console.log("Post deleted :"+result);
}

////////////User signup //

export const getUser = async ({userName,password}) => {

    const userData = await prisma.user.findUnique({
        where:{
            password_name: {
                name: userName,
                password: password
            }
        }
    })
    
    if(userData){
        console.log("User Logged in successfully! ",userData)
        return userData;
    }
    return false;

  };



export const createUser = async ({userName,password,profilePic}) => {
    const result = await prisma.user.create({
        data: {
            name: userName,
            password: password,
            profileUrl: profilePic,
        }
    })
    console.log("User SignedUp :"+result);
    return result
  };
