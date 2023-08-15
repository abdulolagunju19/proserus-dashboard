import { ObjectId } from 'mongodb';
import { dbConnect } from '@/utils/mongodb';

import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

// Handler for api endpoints
export default async function handler(req, res) {

  // Get user session using next-auth
  const session = await getServerSession(req, res, authOptions);

  // If user is not logged in, return an error message
  if (!session) {
    return res.json({ message: 'You are not logged in.' })
  }

  // Handle different HTTP methods
  switch (req.method){
    case 'GET':
      try{
        const client = await dbConnect();
        const database = client.db('sample_analytics');

         // Fetch customer data from the collection, sorted by birthdate in descending order
        const customers = await database
          .collection("customers")
          .find({})
          .sort({ birthdate: -1 })
          .limit(20)
          .toArray();

        client.close();

        // Respond with fetched customer data
        return res.status(200).json(customers);
      } catch(error){
        return res.status(500).json({ message: 'Could not fetch customer accounts. ' + error });
      }
    case 'POST':
      try {
        // Extract relevant data from the request body
        const { username, name, email } = req.body; 

        // Check if required fields are provided
        if (!username || !name || !email) {
          return res.status(400).json({ message: 'Username, name, and email are required fields' });
        }

        const client = await dbConnect();
        const database = client.db('sample_analytics');
        const collection = database.collection('customers');

        // Create a new customer object and insert it into the collection
        const newCustomer = { username, name, email };
        await collection.insertOne(newCustomer);

        client.close();

        res.json({ message: 'Customer account added to database.'});
      } catch (error) {
        return res.status(500).json({ message: 'Could not add customer account. ' + error })
      };
    case 'DELETE':
      try {
        const { id } = req.query;

        if (!id) {
          return res.status(400).json({ message: 'ID is a required field' });
        }
    
        const client = await dbConnect();
        const database = client.db('sample_analytics');
        const collection = database.collection('customers');
    
         // Create a filter using the provided ID and delete the corresponding customer record
        const filter = { _id: new ObjectId(id) };
        await collection.deleteOne(filter);

        client.close();

        return res.status(200).json({ message: 'Customer account deleted successfully.' });
        
      } catch (error) {
        return res.status(500).json({ message: 'There was an error deleting the customer account. ' + error });
      }
  }
}
