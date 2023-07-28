// // posts.js

// import client from "../mongodb";

// export default async function handler(req, res) {
//   // const client = await clientPromise;
//   const db = client.db("nextjs-mongodb-demo");

//   switch (req.method) {
//     case "POST":
//       try {
//         const { title, desc, url, author } = req.body;

//         // Validate the incoming data, e.g., check if required fields are present
//         if (!title || !desc || !url || !author) {
//           return res.status(400).json({ error: "Missing required fields." });
//         }

//         const date = new Date();
//         const myPost = await db.collection("posts").insertOne({
//           title,
//           desc,
//           date,
//           url,
//           author,
//         });

//         res.status(201).json({ status: 201, data: myPost.ops[0] });
//       } catch (error) {
//         console.error("Error inserting data:", error);
//         res.status(500).json({ error: "Error inserting data." });
//       }
//       break;

//     case "GET":
//       try {
//         const allPosts = await db.collection("posts").find({}).toArray();
//         res.status(200).json({ status: 200, data: allPosts });
//       } catch (error) {
//         console.error("Error retrieving posts:", error);
//         res.status(500).json({ error: "Error retrieving posts." });
//       }
//       break;

//     default:
//       res.status(405).json({ error: "Method not allowed." });
//       break;
//   }
// }
