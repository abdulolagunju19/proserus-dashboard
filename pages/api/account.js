// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/util/mongodb";

export default async function handler(req, res) {
  switch (req.method){
    case 'GET':
      try{
        const client = await clientPromise;
        const database = client.db('sample_analytics');
        const accounts = await database
          .collection("customers")
          .find({})
          .sort({ birthdate: -1 })
          .limit(20)
          .toArray();
        client.close();
        return res.status(200).json(accounts);
      } catch(error){
        return res.status(500).json({ message: 'Could not fetch accounts. ' + error })
      }
    case 'PUT':
      return;
    case 'POST':
      return;
    case 'DELETE':
      return;
  }
}
