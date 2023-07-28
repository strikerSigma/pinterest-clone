import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local');
}

async function connectToMongoDB() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log('Connected to MongoDB!');
  }
}

export { connectToMongoDB, client };
