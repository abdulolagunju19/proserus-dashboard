import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

//connect to mongodb client
export async function dbConnect() {
  try {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
    return clientPromise;
  } catch (error) {
    console.error('There was an error connecting the the MongoDB client', error);
  }
}
